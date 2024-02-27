import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import GeolocationMap from "./geolocationMap";

function Geolocations() {
  const [geolocationData, setGeolocationData] = useState([]);
  const mapRef = useRef(null);
  const notificationSoundRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch geolocation data from the server
        const response = await axios.get("/api/geolocation");
        
        // Play a notification sound when new data is received
        if (response.data.length > geolocationData.length) {
          playNotificationSound();
        }

        setGeolocationData(response.data);
      } catch (error) {
        console.error("Error fetching geolocation data:", error);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 20000);

    return () => clearInterval(interval);
  }, [geolocationData]); // Include geolocationData in the dependency array

  const playNotificationSound = () => {
    // Check if the audio element is already loaded
    if (notificationSoundRef.current) {
      notificationSoundRef.current.play();
    }
  };

  const handleLatitudeClick = (latitude, longitude) => {
    mapRef.current.setView([latitude, longitude], 12); // Zoom level 12
  };

  return (
    <div className="data-contain">
      <h1 className="data-contain">Geolocation Tracking App</h1>
      <span />
      <div className="data-contain">
        <table className="table">
          <thead>
            <tr>
              <th>Latitude</th>
              <th>Longitude</th>
              <th>Timestamp</th>
            </tr>
          </thead>
          <tbody>
            {geolocationData.map((location, index) => (
              <tr key={index}>
                <td
                  onClick={() =>
                    handleLatitudeClick(location.latitude, location.longitude)
                  }
                  style={{ cursor: "pointer", textDecoration: "underline" }}
                >
                  {location.latitude}
                </td>
                <td>{location.longitude}</td>
                <td>{location.timestamp}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <GeolocationMap ref={mapRef} geolocationData={geolocationData} />
      {/* Hidden audio element for playing the notification sound */}
      <audio ref={notificationSoundRef} src="/path/to/notification-sound.mp3" />
    </div>
  );
}

export default Geolocations;


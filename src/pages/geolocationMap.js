import React, { forwardRef } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const GeolocationMap = forwardRef(({ geolocationData }, ref) => {
  return (
    <div className="map-container">
      <MapContainer
        center={[0, 0]}
        zoom={2}
        style={{ height: "400px", width: "100%" }}
        ref={ref} // Forwarding the ref here
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {geolocationData.map((location, index) => (
          <Marker
            key={index}
            position={[location.latitude, location.longitude]}
          >
            <Popup>{`Latitude: ${location.latitude}, Longitude: ${location.longitude}`}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
});

export default GeolocationMap;

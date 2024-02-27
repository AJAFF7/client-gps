
// import React, { useState } from 'react';
// import axios from 'axios';

// function ImageUploader() {
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [uploadStatus, setUploadStatus] = useState('');
//   const [imageUrl, setImageUrl] = useState('');

//   const handleFileChange = (event) => {
//     setSelectedFile(event.target.files[0]);
//   };

//   const handleUpload = async () => {
//     if (!selectedFile) {
//       alert('Please select a file.');
//       return;
//     }

//     const formData = new FormData();
//     formData.append('image', selectedFile);

//     try {
//       const response = await axios.post('http://localhost:7272/api/upload', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data'
//         }
//       });
//       const imageUrl = response.data.url;
//       setImageUrl(imageUrl);
//       setUploadStatus('Upload successful');
//     } catch (error) {
//       console.error('Error uploading file:', error);
//       setUploadStatus('Error uploading file.');
//     }
//   };

//   return (
//     <div>
//       <input type="file" onChange={handleFileChange} />
//       <button onClick={handleUpload}>Upload</button>
//       {uploadStatus && <p>{uploadStatus}</p>}
//       {imageUrl && <img src={imageUrl} alt="Uploaded" />}
//     </div>
//   );
// }
// export default ImageUploader;
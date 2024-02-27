import React, { useState } from 'react';


const AddPhoto = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedPhoto(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="app">
      <h1>Your App</h1>
      <input type="file" accept="image/*" onChange={handlePhotoChange} />
      {selectedPhoto && (
        <div className="photo-container">
          <img src={selectedPhoto} alt="Selected" />
        </div>
      )}
    </div>
  );
};

export default AddPhoto;

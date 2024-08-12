// QAP 3
// By:Brian Jackman
// 2024=07-27

import React, { useState, useEffect } from 'react';

const ImageGallery = ({ breed, numImages }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      const response = await fetch(`https://dog.ceo/api/breed/${breed}/images/random/${numImages}`);
      const data = await response.json();
      if (Array.isArray(data.message)) {
        setImages(data.message);
      } else {
        setImages([]);
      }
    };

    fetchImages();
  }, [breed, numImages]);

  return (
    <div>
      {images.map((image, index) => (
        <img className="image-gallery-item" key={index} src={image} alt={breed} />
      ))}
    </div>
  );
};

export default ImageGallery;
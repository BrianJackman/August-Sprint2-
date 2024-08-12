// QAP 3
// By:Brian Jackman
// 2024=07-27


import React, { useState, useEffect } from 'react';
import ImageGallery from './ImageGallery';
import '../App.css';

const BreedSelector = () => {
  const [breeds, setBreeds] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState('');
  const [numImages, setNumImages] = useState(1);
  const [confirmedBreed, setConfirmedBreed] = useState('');
  const [confirmedNumImages, setConfirmedNumImages] = useState(1);

  useEffect(() => {
    const fetchBreeds = async () => {
      const response = await fetch('https://dog.ceo/api/breeds/list/all');
      const data = await response.json();
      setBreeds(Object.keys(data.message));
    };

    fetchBreeds();
  }, []);

  const handleConfirm = () => {
    setConfirmedBreed(selectedBreed);
    setConfirmedNumImages(numImages);
  };
    //select which breed and number of images you want to display
  return (
    <div className="breed-selector">
      <h3>Choose a Breed!</h3>  
      <select value={selectedBreed} onChange={e => setSelectedBreed(e.target.value)}>
        {breeds.map((breed, index) => (
          <option key={index} value={breed}>
            {breed}
          </option>
        ))}
      </select>

      <h3>Number of images to display</h3>
      <select value={numImages} onChange={e => setNumImages(e.target.value)}>
        {[...Array(100).keys()].map((value) => (
          <option key={value} value={value + 1}>
            {value + 1}
          </option>
        ))}
      </select>
      <button className="confirm-button" onClick={handleConfirm}>Confirm</button>
      <ImageGallery breed={confirmedBreed} numImages={confirmedNumImages} />
    </div>
  );
};

export default BreedSelector;
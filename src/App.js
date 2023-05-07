import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DogImage() {
  const [dogImage, setDogImage] = useState('');

  useEffect(() => {
    // Fetch a new dog image on component mount
    fetchDogImage();
  }, []);

  const fetchDogImage = () => {
    axios.get('https://dog.ceo/api/breeds/image/random')
      .then(response => {
        // Set the new dog image URL
        setDogImage(response.data.message);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div>
      <img src={dogImage} alt="Dog" />
    </div>
  );
}

export default DogImage;

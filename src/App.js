import { Fragment, useEffect, useState } from 'react';
import './App.css';

function App() {
  const [dogImage,setDogImage] = useState('');

  useEffect(()=>{
    async function fetchDogImage(){
      const response = await fetch(' https://dog.ceo/api/breeds/image/random');
      const data = await response.json();
      setDogImage(data.message);
    }
    fetchDogImage();
  },[])

  return (
    <Fragment>
      <img src={dogImage} alt="dog image"/>
    </Fragment>
  );
}


export default App;

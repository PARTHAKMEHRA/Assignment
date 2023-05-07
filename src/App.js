import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [mobile, setMobile] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleMobileChange = (event) => {
    setMobile(event.target.value);
  };

  const handleGenerateOTP = async () => {
    try {
      const response = await axios.post('https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP', {
        mobile: parseInt(mobile),
      });

      setErrorMessage('');
      setMobile('');
    } catch (error) {
      console.error(error);
      if (error.response && error.response.data && error.response.data.error) {
        setErrorMessage(error.response.data.error);
      } else {
        setErrorMessage('An error occurred while generating OTP.');
      }
    }
  };

  return (
    <div className="App">
      <h1>Generate OTP</h1>
      <p>Enter your 10-digit mobile number:</p>
      <input type="tel" value={mobile} onChange={handleMobileChange} pattern="[0-9]{10}" required />
      <button onClick={handleGenerateOTP}>Generate OTP</button>
      {errorMessage && <p className="error">{errorMessage}</p>}
    </div>
  );
}

export default App;

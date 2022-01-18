import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {

  const [apod, setApod] = useState([])

  // let url = 'https://api.nasa.gov/planetary/apod?api_key=0DcEwhhQj1GqafMMwf1RKiROabpnhQh8YTfhZCTx'

  const hook = () => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=0DcEwhhQj1GqafMMwf1RKiROabpnhQh8YTfhZCTx')
    .then(response => {setApod(response.data)})
  }
  useEffect(hook, [])

  console.log(apod)

  return (
    <div>
      <img src={apod.url}/>
    </div>
  );
}

export default App;

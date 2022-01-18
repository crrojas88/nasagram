import React, { useState, useEffect } from 'react';
import Photolist from './components/Photo-list';
import axios from 'axios';
import './App.css';

const App = () => {

  const [apod, setApod] = useState([])

  const hook = () => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=0DcEwhhQj1GqafMMwf1RKiROabpnhQh8YTfhZCTx')
    .then(response => {setApod(response.data)})
  }
  useEffect(hook, [])

  console.log(apod)

  return (
    <div>
      < Photolist photoInfo={apod}/>
    </div>
  );
}

export default App;

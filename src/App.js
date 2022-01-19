import React, { useState, useEffect } from 'react';
import Photolist from './components/photo-list/Photo-list';
import Header from './components/header/Header';
import axios from 'axios';
import './App.css';

const App = () => {

  const [apod, setApod] = useState([])
  const [active, setActive] = useState(false)

  const hook = () => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=0DcEwhhQj1GqafMMwf1RKiROabpnhQh8YTfhZCTx')
    .then(response => {setApod(response.data)})
  }
  useEffect(hook, [])

  console.log(apod)

  return (
    <div className="app">
      <Header/ >
      < Photolist photoInfo={apod} active={active} setActive={setActive}/>
    </div>
  );
}

export default App;

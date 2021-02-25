import React, {useState, useEffect} from 'react';
import axios from 'axios';

import './App.css';

function App() {

  const APIkey = '98e5746d72076df9bc16061c44e98b87';
  const [city, setSity] = useState('London');

  useEffect(()=>{
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}`).then(res => {
      console.log(res.data);
    })
  },[]);

  return (
    <div className="App">
      Test
    </div>
  );
}

export default App;

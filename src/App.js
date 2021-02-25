import React, {useState, useEffect} from 'react';
import axios from 'axios';

import './App.scss';

import Navigation from './Components/Navigation';
import Grid from './Components/Grid';

function App() {

  const APIkey = '05a79166788046d12b7289b781dc5645';
  const [cites, setSites] = useState(['London', 'Moscow', 'Erevan']);
  const [data, setData] = useState([]);

  useEffect(()=>{
    let dataCity = cites.map(el => {
        return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${el}&appid=${APIkey}`)
    });
    axios.all(dataCity).then(response => {
      console.log(response);
      setData(response);
    });
  },[]);

  return (
    <div className="main">
      <Navigation />
      <Grid data={data} />
    </div>
  );
}

export default App;

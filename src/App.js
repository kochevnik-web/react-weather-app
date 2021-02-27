import React, {useState, useEffect} from 'react';
import axios from 'axios';

import './App.scss';

import Navigation from './Components/Navigation';
import Modal from './Components/Modal';
import Grid from './Components/Grid';

function App() {

  const APIkey = '05a79166788046d12b7289b781dc5645';
  const [data, setData] = useState([]);
  const [isModal, setIsModal] = useState(false);

  const getData = (city) => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}&units=metric`).then(res => {
      console.log(res.data);
      let newData = data.filter(el => {
        return res.data.name !== el.name
      });
      setData([res.data, ...newData]);
    });
  }

  useEffect(() => {
    getData('Сочи');
  }, [])

  const hendlerModal = () => {
    setIsModal(!isModal);
  }

  return (
    <div className="main">
      {isModal && <Modal hendlerModal={hendlerModal}  hendlerAddCity={(city) => getData(city)}/>}
      <Navigation hendlerModal={hendlerModal}/>
      <Grid data={data} />
    </div>
  );
}

export default App;

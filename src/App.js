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
  const [edit, setEdit] = useState(false);

  const handlerAddCity = (city) => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}&units=metric`).then(res => {
      console.log(res.data);
      let newData = data.filter(el => {
        return res.data.name !== el.name
      });
      setData([res.data, ...newData]);
    });
  }

  useEffect(() => {
    handlerAddCity('Сочи');
  }, [])

  const handlerModal = () => {
    setIsModal(!isModal);
  }

  const handleDelite = city => {
    setData(data.filter(el => {
      return el.name !== city
    }));
  }

  const handleEdit = () => {
    setEdit(!edit);
  }

  return (
    <div className="main">
      {isModal && <Modal handlerModal={handlerModal}  handlerAddCity={(city) => handlerAddCity(city)}/>}
      <Navigation handlerModal={handlerModal} handleEdit={handleEdit}/>
      <Grid data={data} handleDelite={(city) => handleDelite(city)} edit={edit}/>
    </div>
  );
}

export default App;

import React, {useContext} from 'react';
import {Context} from './context';

import './App.scss';

import Navigation from './Components/Navigation';
import Modal from './Components/Modal';
import Grid from './Components/Grid';
import Weather from './Components/Weather';

function App() {

  const {isModal} = useContext(Context);

  return (
    <div className="main">
      {isModal && <Modal/>}
      <Navigation/>
      <Grid/>
      <Weather/>
    </div>
  );
}

export default App;

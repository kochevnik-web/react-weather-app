import React, {useContext, useEffect, useState} from 'react';
import axios from 'axios';
import {Context} from '../context';

import Hourly from './Hourly';
import Weekly from './Weekly';
import Info from './Info';

export default function Weatcher() {

    const {APIkey, isWeather, nightOrDay} = useContext(Context);

    const [singleData, setSingleData] = useState(null);
    const [singleClass, setSingleClass] = useState('');

    useEffect(() => {
        if(isWeather){
            axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${isWeather.coord.lat}&lon=${isWeather.coord.lon}&exclude=current,minutley,alerts&units=metric&appid=${APIkey}`).then(res => {
                setSingleData(res.data);
            });
        }
    },[isWeather]);

    let clx = ['single-weather', nightOrDay, singleClass];

     useEffect(() => {
        setTimeout(() => {
            setSingleClass('show')
        }, 1);
     }, [])

    return (
        <div className={clx.join(' ')}>
            <div className="current-weather">
                <div className="container">
                    <div className="single-info">
                        <span className="single-city">
                            {isWeather.name}
                        </span>
                        <span className="single-temp">
                            {Math.round(isWeather.main.temp)}
                        </span>
                        <div className="high-low-temp">
                            <div className="high">
                                <i className="fas fa-chevron-up"></i>
                                <span>{Math.round(isWeather.main.temp_max)}&deg;</span>
                            </div>
                            <div className="low">
                                <i className="fas fa-chevron-down"></i>
                                <span>{Math.round(isWeather.main.temp_min)}&deg;</span>
                            </div>
                        </div>
                        <span className="condition">{isWeather.weather[0].description}</span>
                        <span className="feels-like">Feels like {Math.round(isWeather.main.feels_like)}</span>
                    </div>
                    <div className="icon">
                        <img src={process.env.PUBLIC_URL + '/images/' + nightOrDay + '.png'} alt="" />
                    </div>
                </div>
            </div>
            {singleData && <Hourly data={singleData}/>}
            {singleData && <Weekly data={singleData}/>}
            <Info data={isWeather}/>

        </div>
    )
}

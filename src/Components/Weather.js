import React, {useContext, useEffect, useState} from 'react';
import axios from 'axios';
import {Context} from '../context';

export default function Weatcher() {

    const {APIkey, isWeather} = useContext(Context);

    const [singleData, setSingleData] = useState(null);

    useEffect(() => {
        if(isWeather){
            axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${isWeather.coord.lat}&lon=${isWeather.coord.lon}&exclude=current,minutley,alerts&appid=${APIkey}`).then(res => {
                setSingleData(res.data);
                console.log(isWeather);
            });
        }
    },[isWeather]);

    let clx = ['single-weather'];
    if(isWeather) {
        clx.push('show');
    }

    return (
        <div className={clx.join(' ')}>
            weather
        </div>
    )
}

import React, {useContext} from 'react';
import {Context} from '../context';

export default function Weatcher() {

    const {isWeather} = useContext(Context);

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

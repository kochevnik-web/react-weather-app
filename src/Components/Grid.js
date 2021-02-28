import React, { useContext } from 'react';
import {Context} from '../context';

import City from './City'

export default function Grid() {

    const {data, isWeather} = useContext(Context);

    let clx = ['grid'];
    if(isWeather) {
        clx.push('hide');
    }

    const sitesElements = data.map(el =>{
        return (
            <div key={el.name} className="city-link">
                <City data={el} />
            </div>
        )
    })

    return (
        <div className={clx.join(' ')}>
            {sitesElements}
        </div>
    )
}

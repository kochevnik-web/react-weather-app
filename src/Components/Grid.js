import React, { useContext } from 'react';
import {Context} from '../context';

import City from './City'

export default function Grid() {

    const {data} = useContext(Context);
    
    const sitesElements = data.map(el =>{
        return (
            <div key={el.name} className="city-link">
                <City data={el} />
            </div>
        )
    })

    return (
        <div className="grid">
            {sitesElements}
        </div>
    )
}

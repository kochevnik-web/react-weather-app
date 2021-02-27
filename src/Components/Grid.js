import React from 'react';

import City from './City'

export default function Grid({data, handleDelite, edit}) {
    const sitesElements = data.map(el =>{
        return (
            <div key={el.name} className="city-link">
                <City data={el} handleDelite={(city) => handleDelite(city)} edit={edit}/>
            </div>
        )
    })

    return (
        <div className="grid">
            {sitesElements}
        </div>
    )
}

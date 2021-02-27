import React from 'react';

import City from './City'

export default function Grid({data}) {
    const sitesElements = data.map((el, idx) =>{
        return (
            <div key={idx} className="city-link">
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

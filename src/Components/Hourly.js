import React from 'react'

export default function Hourly({data}) {

    const hourlyElements = data.hourly.slice(0, 23).map((el, idx) => {
        return (
            <div key={idx} className="hour">
                <span>
                    {new Date(el.dt * 1000).toLocaleString('en-us', {hour: 'numeric'})}
                </span>
                <span>
                    <img src={process.env.PUBLIC_URL + '/images/' + el.weather[0].icon + '.svg' } alt=""/>
                </span>
                <span>{Math.round(el.temp)}&deg;</span>
            </div>
        )
    });

    return (
        <div className="hourly-weather">
            <div className="container">
                {hourlyElements}
            </div>
        </div>
    )
}

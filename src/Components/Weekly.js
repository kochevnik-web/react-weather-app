import React from 'react'

export default function Weekly({data}) {

    const weeklyElements = data.daily.slice(1, 8).map((el, idx) => {
        return (
            <div key={idx} className="dayly">
                <div>
                    <span>{new Date(el.dt * 1000).toLocaleString('en-us', {weekday: "long"})}</span>
                </div>
                <div className="condition">
                    <img src={process.env.PUBLIC_URL + '/images/' + el.weather[0].icon + '.svg' } alt=""/>
                </div>
                <div className="dayly-weather">
                    <span className="high">{Math.round(el.temp.max)}</span>
                    <span className="low">{Math.round(el.temp.min)}</span>
                </div>
            </div>
        )
    });

    return (
        <div className="weekly-weather">
            <div className="container">
                {weeklyElements}
            </div>
        </div>
    )
}

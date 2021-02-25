import React from 'react'

export default function ({data}) {
    return (
        <div className="city">
            <span>{data.name}</span>
            <div className="weather">
                <span>
                    {Math.round(data.main.temp)}&deg;
                </span>
                <img src={process.env.PUBLIC_URL + '/images/' + data.weather[0].icon + '.svg' } />
            </div>
            <div className="video">
                <video
                    autoPlay
                    loop
                    muted
                    src={process.env.PUBLIC_URL + '/videos/' + data.weather[0].icon + '.mp4'}
                ></video>
            </div>
            <div className="bg-overlay"></div>
        </div>
    )
}

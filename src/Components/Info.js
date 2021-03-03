import React from 'react'

export default function Info({data}) {

    let timezone = new Date().getTimezoneOffset() * 60 + data.timezone;

    return (
        <div className="additional-info container">
            <div>
                <span>Sunrise</span>
                <span>{new Date ((data.sys.sunrise + timezone) * 1000).toLocaleString('en-us', {timeStyle: 'short'})}</span>
            </div>
            <div>
                <span>Sunset</span>
                <span>{new Date ((data.sys.sunset + timezone) * 1000).toLocaleString('en-us', {timeStyle: 'short'})}</span>
            </div>
            <div>
                <span>Humidity</span>
                <span>{data.main.humidity}%</span>
            </div>
            <div>
                <span>Cloudness</span>
                <span>{data.clouds.all}%</span>
            </div>
            <div>
                <span>Wind</span>
                <span>{Math.round(data.wind.speed)}mps</span>
            </div>
            <div>
                <span>Pressure</span>
                <span>{Math.round(data.main.pressure * 0.7501)} mm Hg</span>
            </div>
        </div>
    )
}

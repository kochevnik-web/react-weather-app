import React, { useContext } from 'react';
import {Context} from '../context';

export default function City({data}) {

    const {handleDelite, edit} = useContext(Context);

    let clx = ['far', 'fa-trash-alt', 'edit'];

    if(edit){
        clx.push('show');
    }

    return (
        <div className="city">
            <i className={clx.join(' ')} onClick={() => handleDelite(data.name)}></i>
            <span>{data.name}</span>
            <div className="weather">
                <span>
                    {Math.round(data.main.temp)}&deg;
                </span>
                <img src={process.env.PUBLIC_URL + '/images/' + data.weather[0].icon + '.svg' } alt=""/>
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

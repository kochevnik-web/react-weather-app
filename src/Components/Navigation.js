import React, {useContext} from 'react'
import {Context} from '../context';

export default function Navigation() {
    const {data, edit, handlerModal, handleEdit, isWeather, handleSingle, syncWeather, nightOrDay} = useContext(Context);

    let clx = ['container', 'header', nightOrDay];

    return (
        <div className="navigation">
            <header className={clx.join(' ')}>
                <nav>
                    <span>Weather App</span>
                    <div className="right">
                        {!isWeather && <i className={'far fa-edit' + (edit ? ' active': '')} onClick={handleEdit}></i>}
                        {!isWeather && <i className="fas fa-sync" onClick={() => syncWeather(data)}></i>}
                        {!isWeather && <i className="fas fa-plus" onClick={handlerModal}></i>}
                        {isWeather && <i className="fas fa-th" onClick={() => handleSingle(null)}></i>}
                    </div>
                </nav>
            </header>
        </div>
    )
}
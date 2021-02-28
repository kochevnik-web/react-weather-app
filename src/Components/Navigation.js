import React, {useContext} from 'react'
import {Context} from '../context';

export default function Navigation() {
    const {edit, handlerModal, handleEdit, isWeather, handleSingle} = useContext(Context);

    return (
        <div className="navigation">
            <header className="container add-city">
                <nav>
                    <span>Weather App</span>
                    <div className="right">
                        {!isWeather && <i className={'far fa-edit' + (edit ? ' active': '')} onClick={handleEdit}></i>}
                        {!isWeather && <i className="fas fa-sync"></i>}
                        {!isWeather && <i className="fas fa-plus" onClick={handlerModal}></i>}
                        {isWeather && <i className="fas fa-th" onClick={() => handleSingle(null)}></i>}
                    </div>
                </nav>
            </header>
        </div>
    )
}
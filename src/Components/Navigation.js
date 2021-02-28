import React, {useContext} from 'react'
import {Context} from '../context';

export default function Navigation() {
    const {edit, handlerModal, handleEdit} = useContext(Context);

    return (
        <div className="navigation">
            <header className="container add-city">
                <nav>
                    <span>Weather App</span>
                    <div className="right">
                        <i className={'far fa-edit' + (edit ? ' active': '')} onClick={handleEdit}></i>
                        <i className="fas fa-sync"></i>
                        <i className="fas fa-plus" onClick={handlerModal}></i>
                    </div>
                </nav>
            </header>
        </div>
    )
}
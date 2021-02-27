import React, {useState, useContext} from 'react'
import {Context} from '../context';

export default function Modal() {

    const {handlerModal, handlerAddCity} = useContext(Context);

    const [value, setValue] = useState('');
    const addCityName = () => {
        handlerAddCity(value);
        setValue('');
        handlerModal();
    }
    return (
        <div className="modal" onClick={handlerModal}>
            <div className="modal-wrap" onClick={(e)=> {e.stopPropagation()}}>
                <label htmlFor="city-name">Enter location:</label>
                <input
                    autoComplete="off"
                    name="city-name"
                    type="text"
                    placeholder="Search By City Name"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
                <button onClick={addCityName}>Add</button>
            </div>
            
        </div>
    )
}

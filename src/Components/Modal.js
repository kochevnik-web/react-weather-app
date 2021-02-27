import React, {useState} from 'react'

export default function Modal({hendlerModal, hendlerAddCity}) {

    const [value, setValue] = useState('');
    const addCityName = () => {
        hendlerAddCity(value);
        setValue('');
        hendlerModal();
    }
    return (
        <div className="modal" onClick={hendlerModal}>
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

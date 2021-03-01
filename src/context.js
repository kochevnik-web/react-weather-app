import React, {useEffect, useState} from "react";
import axios from 'axios';

const Context = React.createContext();

export default function ContextProvider({ children }) {

    const APIkey = '05a79166788046d12b7289b781dc5645';
    const [data, setData] = useState([]);
    const [isModal, setIsModal] = useState(false);
    const [edit, setEdit] = useState(false);
    const [nightOrDay, setNightOrDay] = useState(null);
    const [isWeather, setIsWeather] = useState(null);

    const handlerAddCity = (city) => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}&units=metric`).then(res => {
            let newData = data.filter(el => {
                return res.data.name !== el.name
            });
            setData([res.data, ...newData]);

            const storage = JSON.parse(localStorage.getItem('cityList')) || [];
            localStorage.setItem('cityList', JSON.stringify([res.data,...storage]));
        });
    }

    async function syncWeather(data) {
        const getAllItems = data.map(el =>{
            return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${el.name}&appid=${APIkey}&units=metric`)
        })
        await axios.all(getAllItems).then(res => {
            setData(res.map(el => el.data));
        });
    }

    useEffect(() => {
        const storage = JSON.parse(localStorage.getItem('cityList')) || [];
        syncWeather(storage);
    }, [])

    const handlerModal = () => {
        setIsModal(!isModal);
    }

    useEffect(() => {
        if(data.length === 0) {
            setEdit(false);
        }
    }, [data])

    const handleDelite = city => {
        setData(data.filter(el => {
            return el.name !== city
        }));

        if(data.length === 1){
            setIsModal(true);
        }

        const storage = JSON.parse(localStorage.getItem('cityList')) || [];
        localStorage.setItem('cityList', JSON.stringify(storage.filter(el => el.name !== city)));
    }

    const handleEdit = () => {
        if(data.length > 0){
            setEdit(!edit);
        }
    }

    const handleSingle = (dataSingle) => {
        if(!edit) {
            setIsWeather(dataSingle);
            if (dataSingle) {
                let now = new Date().getTime();
                now = now + (dataSingle.timezone * 1000);
                const sunrise = dataSingle.sys.sunrise * 1000;
                const sunset = dataSingle.sys.sunset * 1000;
                if(now > sunrise && now < sunset) {
                    setNightOrDay('day');
                }else{
                    setNightOrDay('night');
                }
            } else {
                setNightOrDay(null);
            }
        }
    }

    return (
        <Context.Provider value={{APIkey, data, isModal, edit, isWeather, handlerAddCity, handlerModal, handleDelite, handleEdit, handleSingle, syncWeather, nightOrDay}}>
        {children}
        </Context.Provider>
    );
}

export { Context, ContextProvider };
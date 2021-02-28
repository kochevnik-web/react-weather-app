import React, {useEffect, useState} from "react";
import axios from 'axios';

const Context = React.createContext();

export default function ContextProvider({ children }) {

    const APIkey = '05a79166788046d12b7289b781dc5645';
    const [data, setData] = useState([]);
    const [isModal, setIsModal] = useState(false);
    const [edit, setEdit] = useState(false);

    const handlerAddCity = (city) => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}&units=metric`).then(res => {
        console.log(res.data);
        let newData = data.filter(el => {
            return res.data.name !== el.name
        });
        setData([res.data, ...newData]);
        });
    }

    useEffect(() => {
        handlerAddCity('Сочи');
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
    }

    const handleEdit = () => {
        if(data.length > 0){
            setEdit(!edit);
        }
    }

    return (
        <Context.Provider value={{data, isModal, edit, handlerAddCity, handlerModal, handleDelite, handleEdit}}>
        {children}
        </Context.Provider>
    );
}

export { Context, ContextProvider };
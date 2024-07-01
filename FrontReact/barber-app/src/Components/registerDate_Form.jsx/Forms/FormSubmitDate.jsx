import React,{useState,useEffect} from "react";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
//USO de useform para validacion de los datos mas facil y rapida
import {useform} from 'react-hook-form';

const FormSubmitDate =()=>{
    const [values, setValues] =  useState({
        name: '',
        email: '',
        phone: '',
        date:  '',
        time: '',
        barber: ''
    });
    const [startDate, setStartDate] = useState(new Date());
    const options ={
        1:7,
        2:8,
        3:9,
        4:10,
        5:11,
        6:12,
        }
    
    


const handleSubmit = (evt) =>{
    evt.preventDefault();

}

const handleChange=(evt)=>{
    //CAPTURO LOS EVENTOS EN LOS IMPUT PARA SETEAR LOS VALORES
    const {target} = evt;
    const {name, value} = target;
    
    const newValues = {
        ...values,
        [name]: value
    };

    setValues(newValues);
    

}

return(
    <>
    
    <div className="container">
        <form onSubmit={handleSubmit}
        method='POST'
        action='/api/'
        >
        <div id="inputs">
            <div className="form-group">
            <label htmlFor="name">Nombre</label>
            <input
            id='name'
            name='name'
            value={values.name}
            onChange={handleChange}
            />
            <label htmlFor="email">Email</label>
            <input
            id='email'
            name='email'
            value={values.email}
            onChange={handleChange}
            />
            <label htmlFor="phone">Telefono</label>
            <input
            id='phone'
            name='phone'
            value={values.phone}
            onChange={handleChange}
            />
            </div>
        </div>
        
        <div id="dateSelect" >
            <label htmlFor="date">Fechas</label>
            <DatePicker
            id='date'
            name='date'
            selected={date}
            onSelect={handleDateSelect}
            onChange={(date)=> setStartDate(date)}
            />
             <label htmlFor="time">Hora</label>
             <select id="time" name="time">
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>


        </div>
        
        </form>

    </div>
    </>
)}

export {FormSubmitDate}
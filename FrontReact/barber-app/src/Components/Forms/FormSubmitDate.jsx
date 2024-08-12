import React,{useState,useEffect} from "react";
import DatePicker, {registerLocale} from 'react-datepicker'; //funcion que cambia el calendario a otro idioma
import "react-datepicker/dist/react-datepicker.css";
import es from 'date-fns/locale/es' //necesario para pasar a español el calendario
//CSS
import './formSumitDate.css';
//USO de useform para validacion de los datos mas facil y rapida
import {useform} from 'react-hook-form';
import BarberCard from "../Cards/BarberCard";

registerLocale('es',es)
const barberList =[
    {
        id:1,
        name:"Juan",
        lastname:"Perez",
        city:"Jalisco",
        phone:"+5985543215"
    },
    {
        id:2,
        name:"Juan2",
        lastname:"Perez2",
        city:"Jalisco2",
        phone:"+5985543215"
    },/*
    {
        id:3,
        name:"Juan3",
        lastname:"Perez3",
        city:"Jalisco3",
        phone:"+5985543215"
    },
    {
        id:4,
        name:"Juan3",
        lastname:"Perez3",
        city:"Jalisco3",
        phone:"+5985543215"
    }
    */
]

function FormSubmitDate (){
    const [values, setValues] =  useState({
        name: '',
        email: '',
        phone: '',
        date:  {
            day:'',
            month:''
        },
        time: '',
        barber: ''
    });
    const [startDate, setStartDate] = useState(new Date());

    const options =[
        {value: '9', label: '9 am'},
        {value: '10', label: '10 am'},
        {value: '11', label: '11 am'},
        {value: '12', label: '12 pm'},
        {value: '13', label: '13 pm'},
        {value: '14', label: '14 pm'},
        
    ]



const handleSubmit = async(evt) =>{
    evt.preventDefault();
    values.date.day = startDate.getDate()
    values.date.month = startDate.getMonth()+1

    const data = {...values}
    console.log('esto es data',data)
    try{
        const response = await fetch('http://localhost:3028/api/',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
                });
                const result = await response.json();
                console.log(result)
                if (!response.ok)
                    throw new Error('No se Pudo enviar el form satisfactoriamente')
                alert('Formulario en camino!! ')
    }catch(e){
        console.log(e.name)
    }

}

const handleChange=(evt)=>{
    //CAPTURO LOS EVENTOS EN LOS IMPUT PARA SETEAR LOS VALORES
    const {target} = evt;
    const {name, value} = target;
    
    const newValues = {
        ...values,
        [name]: value
    };
    console.log(evt)
    setValues(newValues);
    

}

return(
    <>
    
    <div className="container">
        <form onSubmit={handleSubmit} >
        <div id="inputs">
            <div className="form-group">

            <input
            className="controls"
            id='name'
            name='name'
            placeholder="Ingrese su Nombre"
            value={values.name}
            onChange={handleChange}
            />
            <input
            className="controls"
            id='email'
            name='email'
            placeholder="Ingrese su Email"
            value={values.email}
            onChange={handleChange}
            />
            <input
            className="controls"
            id='phone'
            name='phone'
            placeholder="Ingrese su Telefono"
            value={values.phone}
            onChange={handleChange}
            />
            </div>
        </div>
        <div id="barberSelect" className="barberSelect" >
            <input
            id="barberNone"
            type="radio"
            name="barberNone"
            />
            <label htmlFor="barberNone">Ninguno</label>
            <input
            id="barber1"
            type="radio"
            name="barber1"
            />
            <label htmlFor="barberNone">Barber 1</label>
            <input
            id="barber2"
            type="radio"
            name="barber2"
            />
            <label htmlFor="barberNone">Barber 2</label>
            {
                barberList.map(barber => (
                    <BarberCard {...barber }/>
                ))
                
            }
        </div>
      

        {/*
        COMIENZA EL DIV DE FECHA
        */ }
        <div id="dateSelect" className="dateSelect" >
            <label htmlFor="date">Fechas Disponibles</label>
            <DatePicker
            id='date'
            name='date'
            className="calendarDate"
            locale='es'
            selected={startDate}
            onChange={(fecha)=>setStartDate(fecha)}
            />
             <label htmlFor="time">Hora</label>
             <select 
             id="time" 
             name="time"
             onChange={handleChange}
             >
             <option selected="selected">----------</option>         
               {options.map((option) => (
                <option key={option.value} value={option.value}>
                {option.label}
                </option> 
            ))}
            </select>

        </div>
      <button onClick={handleSubmit} className="btn btn-primary">Agendar</button>
        
        </form>

    </div>
    </>
)}

export {FormSubmitDate}
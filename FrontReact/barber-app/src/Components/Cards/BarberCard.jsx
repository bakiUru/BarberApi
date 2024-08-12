import React from "react"
import './barberCard.css'

const handleSelect = (evt)=>{
    evt.preventDefault()
    console.log(evt.target.value)
    alert('Aun no hacen nada... danos time! :)')
}

function BarberCard({name,city}) {
    console.log(name,city)
    return(
        <div class="card-container">
        <span class="pro">PRO</span>
        <img class="round" src="https://randomuser.me/api/portraits/women/79.jpg" alt="user" />
        <h3>{name}</h3>
        <h6>{city}</h6>
        <p>User interface designer and <br/> front-end developer</p>
        <div class="buttons">
            <button class="card-button primary"  onClick={handleSelect}>
                Agendar
            </button>
            <button class="card-button primary ghost" onClick={handleSelect}>
                Seguir
            </button>
        </div>
        <div class="skills">
            <h6>Detalles</h6>
            <ul>
                {/*props.history.map(item=>(
                    <li>{item}</li>
                ))*/}
                <li>UI / UX</li>
                <li>Front End Development</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Node</li>
            </ul>
        </div>
    </div>
    )
} 

export default BarberCard
import mongoClient from 'mongoose'
import 'dotenv/config'
import { NoConnectDB } from '../utils/Errors/error.js'
const MAX_ATTEMPTS = 3

const conexMongoDB = async (url)=>{
    //centinela de intentos para la reconexion de la BD
    let attempt = 0
    console.log(url)
    while (attempt<MAX_ATTEMPTS)
    {
        try{
        //son opciones para evitar datos inecesarios en la consola
            const db = await mongoClient.connect(url)
            console.log("Database Barber connected!") 
            return db
        }catch(error){
            attempt++
            console.log('Retrying in 3s..')
            await new Promise((res)=> setTimeout(res,3000))
        }

    }
    if(attempt == MAX_ATTEMPTS)
    ///console.log(`Failed to Connect to BarberDB, after ${MAX_ATTEMPTS} attempts...`)
    throw new NoConnectDB('Problemas de conexion con la BD -- Contacte con el Administrador')
    
}

export {conexMongoDB}
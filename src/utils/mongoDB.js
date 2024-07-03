import mongoClient from 'mongoose'
import 'dotenv/config'
const MAX_ATTEMPTS = 5

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
            console.log(error)
            attempt++
            console.log('Retrying in 3s..')
            await new Promise((res)=> setTimeout(res,3000))
        }
    }
    console.log(`Failed to Connect to BarberDB, after ${MAX_ATTEMPTS} attempts...`)
    return {succes: 'ERROR', message:'Failed To Connect', code: 404}
}

export {conexMongoDB}
import mongoClient from 'mongoose'
import 'dotenv/config'

const conexMongoDB = async (url)=>{
    console.log(url)
    try{
        //son opciones para evitar datos inecesarios en la consola
        const db = await mongoClient.connect(url)
        console.log("Database Barber connected!")
    }catch(error){
        console.log(error)
    }

}

export {conexMongoDB}
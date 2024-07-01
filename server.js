import express from 'express'
import  {routerDB} from './src/Routes/db.routes.js'
import {conexMongoDB} from './src/utils/mongoDB.js'
import { BotTelegram } from './src/utils/telegramBot.js'
//VAMOS A NECESITAR TRABAJAR CON WEBSOCKET, PARA LA AGENDA DE HORA
//Necesario para cargar las variables de entorno
import 'dotenv/config'
const app = express()

const PORT = process.env.PORT || 3035

app.use(express.json())
    .use(express.urlencoded({extended: true}))
    .use('/api',routerDB)

app.listen(PORT, ()=>{
    console.log(`Server Barber is running on port ${PORT}`)
     //Conecto a la BD
    try{
        conexMongoDB(process.env.URLMONGODB )
        BotTelegram()
    }catch(error){
        console.log(error)
    }

})

app.get('/', async (req, res)=>{
    
    res.send('Hello World')
})
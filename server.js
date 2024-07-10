import express from 'express'
import path from 'path'
import  barberRoute from './src/Routes/barber.routes.js'
import {conexMongoDB} from './src/utils/mongoDB.js'
import { BotTelegram } from './src/utils/telegramBot.js'
//VAMOS A NECESITAR TRABAJAR CON WEBSOCKET, PARA LA AGENDA DE HORA
//Necesario para cargar las variables de entorno
import 'dotenv/config'
import {fork} from 'child_process'


const app = express()

const PORT = process.env.PORT || 3035
//const processPATH = 'C:/Users/admin/Desktop/BarberAPI/src/utils/test.process.js'
//Prueba de Subprocesos
//console.log(path.normalize(processPATH))
//ES UNA PRUEBA PARA MULTITHREADING... me dio problemas la subRutina 
const askTime = () => {
    const test = fork('test.process.js',['pruebitaProceso'])
    console.log('Inicio el SubProceso\n')
    test.send('esto te envio desde server.js')
    test.on('test', (msg) => {
        console.log(msg)
        console.log(test)
    })
    test.send('esto te envio desde server.js')
}

app.use(express.json())
    .use(express.urlencoded({extended: true}))
    .use('/api',barberRoute)

app.listen(PORT, ()=>{
    console.log(`Server Barber is running on port ${PORT}`)
    //Inicio proceso de test
    //askTime()
     //Conecto a la BD
    try{
        const db = conexMongoDB(process.env.URLMONGODB )
        BotTelegram()
    }catch(error){
        console.log(error)
    }

})


app.get('/', async (req, res)=>{
    
    res.send('Hello World').status(200)
})


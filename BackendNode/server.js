import express from 'express'
import  barberRoute from './src/Routes/barber.routes.js'
import {conexMongoDB} from './src/Config/mongo.config.js'
import { BotTelegram } from './src/utils/telegramBot.js'
//VAMOS A NECESITAR TRABAJAR CON WEBSOCKET, PARA LA AGENDA DE HORA
//Necesario para cargar las variables de entorno
import 'dotenv/config'
import {fork} from 'child_process'
//CORS
import cors from 'cors'
import { corsOK } from './src/utils/whitelistCors.js'


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
    .use(cors({
        origin: corsOK
    }))
    .use(express.urlencoded({extended: true}))
    .use('/api',barberRoute)

app.listen(PORT, async ()=>{
    console.log(`Server Barber is running on port ${PORT}`)
    //Inicio proceso de test
    //askTime()
     //Conecto a la BD
    const dbPromise =await conexMongoDB(process.env.URLMONGODB)
        .then(res=>{
            console.log(res.connection.name)
        })
        .catch(err=>{
            console.log(err)
        })
        if(!dbPromise)
        {
            await BotTelegram()
            .then(res=>console.log('inicio el Bot',res)
            ).catch(err=>console.log(err))
            
        }else console.log('no se iniciara el bot por desconexion con la bd')

})


app.get('/', async (req, res)=>{
    
    res.send('Hello World').status(200)
})


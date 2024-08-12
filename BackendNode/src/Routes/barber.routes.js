import {Router} from 'express' 
import { addBarberController, getBarbersController } from '../Controllers/barbers.controller.js'
import { message } from 'telegraf/filters'

const BarberDB = Router()

const pruebitamidleware = (req,res,next) =>{
    console.log('solo es una prueba de midleware')
    next()
}

BarberDB.post('/',(req,res)=>{
    console.log(req.body)
    res.send({message:'Llego ok'}).status(200)
})

BarberDB.get('/barber',pruebitamidleware, getBarbersController)

BarberDB.post('/barber', addBarberController)

BarberDB.post('/newDate', async (req,res)=>{
    try {
        const newDate = req.body
        //Funcion que maneje los datos que estan entrando
        res.status(200).json({newDate})
    }
    catch (error) {}
    })


export default  BarberDB 
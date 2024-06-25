import {Router} from 'express' 
import {Barbers} from '../Models/barber_models.js'
const routerDB = Router()

routerDB.get('/barber', async (req,res)=>{
    try {
        const barbersDB = await Barbers.find()
        res.json(barbersDB).status(200)
    } catch (error) {
        res.json({message: error}).status(400)
        }
})

routerDB.post('/newDate', async (req,res)=>{
    try {
        const newDate = req.body
        //Funcion que maneje los datos que estan entrando
        res.status(200).json({newDate})
    }
    catch (error) {}
    })


export { routerDB}
import { addBarber, getBarber } from '../Models/CRUD/barber.dao.js'

export const getBarbersController =  async (req,res)=>{
    try {
        const barbersDB = await getBarber()
        console.log(barbersDB)
        res.json(barbersDB).status(200)
    } catch (error) {
        res.json({message: error}).status(400)
        }
}

export const addBarberController = async (req, res) =>{
    try {
        const newBarber = await addBarber(req.body)
        res.json(newBarber).status(200)
    }
    catch(error){
        res.json({message:error + 'No se pudo Agregar Barber@ =('}).status(404)
    }finally{
        console.log(req.body)
    }
}
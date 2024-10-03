import { addBarber, getBarber } from '../Models/CRUD/barber.dao.js'
import { NotValidateDataError } from '../utils/Errors/error.js'
import {request, response} from 'express'
const PHONE_LENGTH = 9

const isValidPhone = (phone)=>{
    if(phone.length !== PHONE_LENGTH || phone[0] !== '0')
        throw new NotValidateDataError('Numero de telefono Invalido')
    phone=[...phone]
    phone.map(number=>{
        if(isNaN(Number(number)))
            throw new NotValidateDataError('Contiene Letras  ')
    })
}
const isValidData = (data)=>{
    const {name,email,phone,experience,socialMediaHandles} = data
    if(!name || !email || !phone)
        throw new NotValidateDataError
    if(!experience)
        data.experience = 0
    if (!socialMediaHandles)
        data.socialMediaHandles = []
    //Validacion de Telefono
    isValidPhone(phone)

    return data
}

export const getBarbersController =  async (req=request,res=response)=>{
    try {
        const barbersDB = await getBarber()
        console.log(barbersDB)
        res.json(barbersDB).status(200)
    } catch (error) {
        res.json({message: error}).status(400)
        }
}

export const addBarberController = async (req=request,res=response) =>{
    try {
        const newBarber = await addBarber(isValidData(req.body))
        res.json(newBarber).status(200)
    }
    catch(error){
        if (error.code == 11000 )
            res.status(400).json({message: error})
        
        res.status(404).json({status: 'ERROR', message:error + '' })
    }finally{
        console.log('esto recibo',req.body)
    }
}
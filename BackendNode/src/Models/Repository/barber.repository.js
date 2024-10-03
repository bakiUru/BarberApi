import { DuplicatedRegister } from "../../utils/Errors/error.js";
import { Barbers } from "../barber_models.js";
/*
Definir el dato a pasar como parametro para filtrar el barbero a mod // del // upd
En este caso utilizo el phone

*/
/**
 * 
 * Investigar el uso de AGGREGATE
 * con esto podemos realizar reportes predefinidos 
 *
 */
const getBarber = async (query,option) =>{
    let filter = query
    if(query!=undefined)
    {
        filter = query.split('=')
        //De esta forma obtenemos el los valores del query para filtrar 
        filter = Object.fromEntries([filter])
    }
    try{
        //MONGODB
        return await Barbers.paginate(query,option)
    }catch(error){
        console.log(error)
        return null
    }

}

const getBarberByID = async (id) =>{
    try {
        return await Barbers.findById(id)
    } catch (error) {
        console.log(error)
    }
}

//funcion de filtrado
const getBarberByPhone = async (phone) =>{
    try{
        //MONGODB
        return await Barbers.findOne({phone: phone})
        }catch(error){
                console.log(error)
                return null
        }
    
}

const updBarber = async (data) =>{
    const barber = await getBarberByPhone(data.phone)
    if(barber==null)
        return null
    try{
        //MONGODB
        const {name,email,phone,experience,socialMediaHandles} = data
        return Barbers.findByIdAndUpdate(barber.id,
            {name:name,
            email:email,
            phone: phone,
            experience:experience,
            socialMediaHandles:socialMediaHandles})

    }catch(e){
        console.log(error)
    }
}

const delBarber = async (data) =>{
    const barber = await getBarberByPhone(data.phone)
    if(barber==null)
    return null
    try{
        //MONGODB
        return await Barbers.findByIdAndDelete(barber.id)
        }catch(e){
            console.log(error)
            }

}

const addBarber = async (data) =>{
    const {name,email,phone,experience,socialMediaHandles} = data
    try{
        //MONGODB
        return await Barbers.create({name,email,phone,experience, socialMediaHandles})
        }catch(error){
            //error de duplicado
            if(error.code === 11000)
            {
                const regExpresion = `"([^}]*)"`
                const duplicateKey=e.errorResponse.errmsg.match(regExpresion)[1]
                throw new DuplicatedRegister('No se permite Duplicar registro--->' + duplicateKey)
            }
                throw error
            }
}

export {
    getBarber,
    getBarberByID,
    getBarberByPhone,
    updBarber,
    delBarber,
    addBarber
}

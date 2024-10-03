/*
Buscaremos dentro del modelo la el dia que trae, si no lo encuentra lo creamos, y si existe pusheamos los datos
de la agenda (dia,hora,barbero,cliente)
def buscar_dia(self, fecha):
dia = self.dia.find_one({"fecha": fecha})
if dia is None:
self.dia.insert_one({"fecha": fecha})
else:
self.dia.update_one({"fecha": fecha}, {"$push": {"hora": {"hora","barbero","cliente"})
*/
//NO tengo en claro si vamos a necesitar los repositorios de CLient -- Barbers
import { Appoint } from "../appointment_model.js";
import { Barbers } from "../barber_models.js";
import { Clientes } from "../cliente_models.js";


const searchDate = async (date) =>{
    try {
        /*
        necesito las fechas que estan disponibles
        desde el servicio envio el cronograma de horario del local
        lo vamos a tener en un archivo aparte
        con la posibilidad de cambiar los horarios a voluntad de
        los administradores del local
        */
        const dateAvailable = await Appoint.findOne({date: date.date})
        if(!dateAvailable)
            return []
        const hourAvailable = await Appoint.aggregate([
            {
                $project:{
                    appoint:{
                        $filter:{
                            input: "$hour",
                            as: 'hourAvailable',
                            cond: {
                                $and: [
                                    { $ne: ["$$hourAvailable", date.hour] }
                                    ]
                                }
                    }
                }
            }
        }])      
        if (hourAvailable.length == 0) 
            return []
        return {dateAvailable,hourAvailable}
    } catch (error) {
        console.log(error)
    }
}
const addAppointment = async (data) =>{
    const { date, hour, barber, client } = data;
    try {
        //en el servicio comprobar que no existe ya una cita con los mismos valores
        //estudiar como realizar esa operacion
        return await Appoint.create({date,hour,barber,client})
    
    }catch(error){
        console.log(error)
    }
}



export default{
    searchDate,
    addAppointment

}
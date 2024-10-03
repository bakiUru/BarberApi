import { Client } from "../client_models";
/**
 * 
 * Investigar el uso de AGGREGATE
 * con esto podemos realizar reportes predefinidos 
 *
 */
const getClient = async (phone)=>{
    try{
        const client = await Client.find({phone: {$eq:phone}})
        console.log(client)
        return client        

    }catch(error)
    {
        console.log(error)
    }
}

const getAllClient = async () =>{
    try{
        return await Client.find()  
    }catch(error){
        console.log(error)
    }
}

const delClient = async (phone) =>
{
    const client = await getClient(phone)
    if(!client)
        return {message: 'No encontramos el Cliente'}
    try {
        return  await Client.findOneAndDelete(client._id)

    } catch (error) {
        console.log(error )
    }
}

const addClient = async (data) =>{
    const {name, email, phone, clientDate} = data
    try{
        const newClient = await Client.create({name,email,phone,clientDate})
        return newClient
    }
    catch(error){
        console.log(error)
    }
}

const updClient = async (data) =>{
    const {name, email, phone} = data
    const client = await getClient(phone)
    if(!client)
        return {message: 'No encontramos el Cliente a Actualizar'}
    try {
        //Por si vienen datos vacios los cuales no son necesarios actualizar,
        //se actualizan solo los campos que se envian 
        //PROBAR y revisar otra manera de conseguir el mismo resultado
        name?name:name=client.name
        email?email:email=client.email
        phone?phone:phone=client.phone
        
        return Client.findByIdAndUpdate(client._id, {name,email,phone},{returnNewDocument:true})
    } catch (error) {
        console.log(error)
    }
}

export {
    getClient,
    delClient,
    addClient,
    updClient,
    getAllClient

}
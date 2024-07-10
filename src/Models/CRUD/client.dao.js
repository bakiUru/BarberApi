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

    }catch(e)
    {
        console.log(e)
    }
}

const addClient = async (data) =>{
    const {name, email, phone, clientDate} = data
    try{
        const client = 4
    }
    catch(e){
        console.log(e)
    }
}

export {
    getClient
}
import { Schema, model } from "mongoose";
import { Client } from "./client_models.js";
const AppointmentSchema = new Schema({
    date: 
    {
        type: Date,
        required: true
        },
    client:
            [{
                type: Schema.Types.ObjectId,
                ref: Client.collectNames,
                required: true
            }],
})
/**
 * Realizar pruebas de busqueda de fechas para llenar arreglo 
 */
AppointmentSchema.pre('find',()=>{
    Client.populate('client')
})
const Appoint = model('appointemnts', AppointmentSchema)
export {Appoint}
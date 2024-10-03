import { Schema, model } from "mongoose";
import { Client } from "./client_models.js";
import { Barbers } from "./barber_models.js";
const AppointmentSchema = new Schema({
    date: 
    {
        type: Date,
        required: true
        },
    appoint:
            [{
                hour:{
                    type: String,
                    required: true
                },
                barber:{
                    type: Schema.Types.ObjectId,
                    ref: Barbers.collectNames,
                    required: true
                },
                client:{
                    type: Schema.Types.ObjectId,
                    ref: Client.collectNames,
                    required: true
                }
            }],
    status:{
        type: Boolean,
        default: true
    }
})
/**
 * Realizar pruebas de busqueda de fechas para llenar arreglo 
 */
AppointmentSchema.pre('find',()=>{
    Client.populate('client')
})
const Appoint = model('appointemnts', AppointmentSchema)
export {Appoint}
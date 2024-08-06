import { Schema, model } from "mongoose";
import { Barbers } from "./barber_models.js";
import { Appoint } from "./appointment_model.js";

const ClientSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        require
    },
    phone: {
        type: Number,
        unique: true,
        required: ()=>{return `${this.name} required a Phone Contact!` }
    },
    clientDate:{ 
        date:[{
            type: Schema.Types.ObjectId,
            appoints: Appoint.collectionName,
            type: Schema.Types.ObjectId, 
            ref: Barbers.collectionName,
            default: null
            }]
    }
},{timestamps:true})

const Client = model('client',ClientSchema)
export {Client}
import { Schema } from "mongoose";
import { Barbers } from "./barber_models.js";

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
            type: Date,
            barber:{ 
            type: Schema.Types.ObjectId, 
            ref: Barbers.collectionName,
            default: null
            }
        }]
    }
})

const Client = model('Client',ClientSchema)
export {Client}
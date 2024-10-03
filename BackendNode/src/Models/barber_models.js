import  {Schema,model} from 'mongoose'

const BarberSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone:{
        type: String,
        require: true,
        unique: true
    },
    shift:{
        type: String,
        default: complete,
        enum: ['morning', 'afternoon', 'evening'],
    },
    experience:{
        type: Number,
    },
    socialMediaHandles: {
        type: Map,
        of: String
      }
})
//VALIDACIONES NECESARIAS O EN FRONT
//creo modelo
const Barbers = model('barbers', BarberSchema)

export {Barbers}
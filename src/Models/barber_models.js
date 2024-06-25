import  {Schema,model} from 'mongoose'


const barberSchema = new Schema({
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
const Barbers = model('Barberos', barberSchema)

export {Barbers}
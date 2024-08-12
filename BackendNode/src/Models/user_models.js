import { Schema,model } from "mongoose";

const UserSchema = new Schema({
    email: {
        type: String,
        unique: true,
        required: true
        },
    password: {
        type: String,
        select: false,
        require: true
    },
    role: {
        type: String,
        enum: ['admin','user'],
        default: 'user'
    }
})

const User =  model('user',UserSchema)
export {User}
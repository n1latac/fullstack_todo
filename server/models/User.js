const mongoose = require('mongoose')
const {Schema} = require('mongoose')

const userSchema = new Schema({
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        validate: {
            validator: (value) => {
                return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value)
            }
        }
    },
    password: {
        type: String,
        required: true
    },
    birthday: {
        type: Date,
        //required: true,
        required: true,
        validate:{
            validator: (value)=>{
            return value < new Date()
        }
    }
    }
})

const User = mongoose.model('User', userSchema)

module.exports = User
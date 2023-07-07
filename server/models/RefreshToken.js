const mongoose = require('mongoose')
const {Schema} = require('mongoose')

const refreshTokenSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    token: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    fingerPrint: {
        type: String
    }
})

const RefreshToken = mongoose.model('RefreshToken', refreshTokenSchema)
module.exports = RefreshToken
const mongoose = require('mongoose')
const {Schema} = require('mongoose')

const TaskSchema = new Schema({
    authorId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    body: {
        type: String,
        required: true
    },    
    deadline: {
        type: Date,
        validate: {
            validator: function(value){
                return value >= new Date()
            },
            message: props => `${props.value} is not a valid date`
        }   
    },
    status: {
        type: String,
        required: true
    } 
},{
    timestamps: true,
})

const Task = mongoose.model('Task', TaskSchema)

module.exports = Task
const {Task} = require('../models')

module.exports.createTask = async(req, res, next) =>{
    try {
        const {payloadToken: {userId}, body} = req
        console.log(userId)
        const task = await Task.create({...body, authorId: userId})
        console.log(task)
        res.status(201).send({data:task})
    } catch (error) {
        next(error)
    }
}

module.exports.getAllUserTask = async( req, res, next)=>{
    try {
        const {payloadToken:{userId}} = req
        const allTasks = await Task.find({
            authorId: userId
        })
        res.status(200).send({data: allTasks})
    } catch (error) {
        next(error)
    }
}
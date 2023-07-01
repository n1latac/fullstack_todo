const {Router} = require('express')
const taskRouter = Router()
const TaskController = require('../controllers/Task.controller')
const {userInstance} = require('../middlewares/userInstance')

taskRouter.post('/:userId', TaskController.createTask)
taskRouter.get('/:userId', TaskController.getAllUserTask)

module.exports = taskRouter
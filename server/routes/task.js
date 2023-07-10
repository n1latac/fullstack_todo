const {Router} = require('express')
const taskRouter = Router()
const TaskController = require('../controllers/Task.controller')
const {userInstance} = require('../middlewares/userInstance')
const {checkToken} = require('../middlewares/checkToken')

taskRouter.post('/',checkToken, TaskController.createTask)
taskRouter.get('/',checkToken, TaskController.getAllUserTask)
taskRouter.get('/:taskId', checkToken, TaskController.deleteTask)

module.exports = taskRouter
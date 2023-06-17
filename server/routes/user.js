const {Router} = require('express')
const UserController = require('../controllers/User.controller')
const userRouter = Router()

userRouter.post('/register',UserController.registrationUser)

module.exports = userRouter
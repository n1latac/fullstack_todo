const {Router} = require('express')
const UserController = require('../controllers/User.controller')
const {passwordHash} = require('../middlewares/passwordHash')
const userRouter = Router()

userRouter.post('/register',passwordHash, UserController.registrationUser)
userRouter.post('/login', passwordHash, UserController.loginUser)
userRouter.get('/:token', UserController.checkAuth)

module.exports = userRouter
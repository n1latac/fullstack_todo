const {Router} = require('express')
const UserController = require('../controllers/User.controller')
const {passwordHash} = require('../middlewares/passwordHash')
const {checkToken} = require('../middlewares/checkToken')
const userRouter = Router()

userRouter.post('/register',passwordHash, UserController.registrationUser)
userRouter.post('/login', passwordHash, UserController.loginUser)
userRouter.get('/',checkToken, UserController.checkAuth)
userRouter.post('/refresh', UserController.refreshSession)

module.exports = userRouter
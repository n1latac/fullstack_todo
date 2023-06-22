const {User} = require('../models')
const bcrypt = require('bcrypt')

module.exports.registrationUser = async(req, res, next) => {
    try {
        const {body, passwordHash} = req
        console.log(body)
        const user = await User.create({...body, password: passwordHash})
        res.status(200).send(user)
    } catch (error) {
        next(error)
    }
}

module.exports.loginUser = async(req, res, next) => {
    try{
        const {body, passwordHash} = req
        const foundUser = await User.findOne({
            email: body.email
        })
        if(foundUser){
            const result = await bcrypt.compare(body.password,foundUser.password)
            console.log(result)
            console.log(passwordHash)
            console.log(foundUser.password)
            if(result){
                res.status(200).send({error: 'you are login'})
            }else{
                console.log('bad')
                res.status(400).send({error: 'password is incorrect'})
            }
        }else{
            res.status(400).send({error: 'this email is not register.'})
        }
    }catch(error){
        next(error)
    }
}

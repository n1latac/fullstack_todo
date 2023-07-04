const {User} = require('../models')
const bcrypt = require('bcrypt')
const {verifyToken} = require('../services/tokenAuth')
const {createToken} = require('../services/tokenAuth')

module.exports.registrationUser = async(req, res, next) => {
    try {
        const {body, passwordHash} = req
        console.log(body)
        const user = await User.create({...body, password: passwordHash})
        const token = await createToken({userId: user._id, email: user.email})
        //localStorage.setItem('token', token)
        res.status(200).send({data: user, token: token})
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
            if(result){
                const token = await createToken({userId: foundUser._id, email: foundUser.email})
                res.status(200).send({data: foundUser, token: token})
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

module.exports.checkAuth = async (req, res, next)=>{
    try {
        const {params: {token}} = req
        const verifiedToken = await verifyToken(token)
        const user = await User.findOne({email: verifiedToken.email})
        res.status(200).send({data: user})
    } catch (error) {
        next(error)
    }
}

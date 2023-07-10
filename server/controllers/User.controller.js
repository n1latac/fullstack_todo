const {User, RefreshToken} = require('../models')
const bcrypt = require('bcrypt')
const {createAccessToken, verifyAccessToken, createRefreshToken, veifyRefreshToken} = require('../services/tokenAuth')


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
        const {body} = req
        const foundUser = await User.findOne({
            email: body.email
        })
        if(foundUser){
            const result = await bcrypt.compare(body.password,foundUser.password)
            if(result){
                const accessToken = await createAccessToken({userId: foundUser._id, email: foundUser.email})
                const refreshToken = await createRefreshToken({userId: foundUser._id, email: foundUser.email})
                const addedToken = await RefreshToken.create({token: refreshToken, userId: foundUser._id })
                res.status(200).send({data: foundUser, tokens: {accessToken, refreshToken}})
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
        const {payloadToken} = req
        console.log(payloadToken)
        const user = await User.findOne({email: payloadToken.email})
        res.status(200).send({data: user})
    } catch (error) {
        next(error)
    }
}

module.exports.refreshSession = async(req, res, next)=>{
    /*
    Access Token - живет мало, многоразовый, именно с ним делаем все запросы
    Refresh Token - живет долго, но он одноразовый


    1. Приходит запрос с access-токеном
        -АТ валидный, работаем
        -АТ невалидный(прострочился)
            1. Отвечаем кодом помылкы
            2. В ответ на эту ошибку, фронт надсылает РТ.
                -если этот Р-токен - валидный, то мы "Рефрешим" всю сессию - выдаем новую пару токенов(АТ, РТ)
                -если РТ невалидный, то перенапраляем пользователя на авторизацию.
     */
    const {body:{refreshToken}} = req
    let verifiedResult
    try {
        verifiedResult = await veifyRefreshToken(refreshToken)
    } catch (error) {
        res.status(401).send({err: 'Invalid token'})
    }
    try {
        if(verifiedResult){
            const user = await User.findOne({email: verifiedResult.email})
            console.log(refreshToken, user._id)
            const RTuser = await RefreshToken.findOne({$and: [{token: refreshToken}, {userId: user._id}]})
            console.log(RTuser)
            if(RTuser){
                const removeResult = await RTuser.deleteOne()
                const newAccessToken = await createAccessToken({userId: user._id,email: user.email})
                const newRefreshToken = await createRefreshToken({userId: user._id,email: user.email})
                const addedToken = await RefreshToken.create({token: newRefreshToken, userId: user._id })
                res.status(200).send({tokens: {accessToken: newAccessToken, refreshToken: newRefreshToken}})
            }else{
                res.status(404).send({error: 'no this token'})
            }

  
        }else{
            res.status(401).send({error: 'Invalid token'})
        }
    } catch (error) {
        next(error)
    }
}

 const {promisify} = require('util')
 const jwt = require('jsonwebtoken')
 const secret = 'qwertyui'

 const promisifyJWTSign = promisify(jwt.sign)
 const promisifyJWTVerify = promisify(jwt.verify)

 module.exports.createToken = async({userId, email})=>await promisifyJWTSign({userId, email}, secret, {
        expiresIn: 60*60
    })
 

 module.exports.verifyToken = async(token) => await promisifyJWTVerify(token, secret)
 
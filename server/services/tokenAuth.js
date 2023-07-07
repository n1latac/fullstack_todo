 const {promisify} = require('util')
 const jwt = require('jsonwebtoken')
 
 
 const ACCESS_SECRET = 'qwertyui'
 const REFRESH_SECRET = 'asdfghjkl'

 const promisifyJWTSign = promisify(jwt.sign)
 const promisifyJWTVerify = promisify(jwt.verify)

 module.exports.createAccessToken = async({userId, email})=>await promisifyJWTSign({userId, email}, ACCESS_SECRET, {
        expiresIn: 60*60
    })
 

 module.exports.verifyAccessToken = async(token) => await promisifyJWTVerify(token, ACCESS_SECRET)

 module.exports.createRefreshToken = async({userId, email}) => await promisifyJWTSign({userId,email}, REFRESH_SECRET,{
    expiresIn: '7d'
 })

 module.exports.veifyRefreshToken = async(token) => await promisifyJWTVerify(token, REFRESH_SECRET)
 
const {verifyAccessToken} = require('../services/tokenAuth')

module.exports.checkToken = async(req, res, next)=>{
    try {
        const {headers: {authorization}} = req
        const [ , token] = authorization.split(' ')
        req.payloadToken = await verifyAccessToken(token)
        next()
    } catch (error) {
        console.log('no')
        next(error)
    }
}
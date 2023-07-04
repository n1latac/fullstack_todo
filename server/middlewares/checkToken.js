const {verifyToken} = require('../services/tokenAuth')

module.exports.checkToken = async(req, res, next)=>{
    try {
        const {headers: {authorization}} = req
        const [ , token] = authorization.split(' ')
        req.payloadToken = await verifyToken(token)
        next()
    } catch (error) {
        next(error)
    }
}
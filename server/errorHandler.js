const { Error: {ValidationError} } = require("mongoose")
const {JsonWebTokenError, TokenExpiredError} = require('jsonwebtoken')

module.exports.errorHandler = async(err, req, res, next) => {
    
        if(err instanceof ValidationError){
            return res.status(400).send({err: err.message})
        }
        if(err instanceof JsonWebTokenError || err instanceof TokenExpiredError){
            return res.status(400).send({err: err.message})
        }
        
        return res.status(500).send('unknown error')
    
}
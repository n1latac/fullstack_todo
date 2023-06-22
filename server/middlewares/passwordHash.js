const bcrypt = require('bcrypt')
const CONSTANTS = require('../configs/constants')

module.exports.passwordHash = async(req, res, next) => {
    try {
        const {body:{password}} = req
        req.passwordHash = await bcrypt.hash(password,CONSTANTS.SALT_ROUND)
        next()
    } catch (error) {
        next(error)
    }
}
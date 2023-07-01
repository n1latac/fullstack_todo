const {User} = require('../models')

module.exports.userInstance = async(req, res, next) => {
    try {
        const {params: {userId}} = req
        const user = await User.findById(userId)
        req.userInstance = user
        next()
    } catch (error) {
        next(error)
    }
}
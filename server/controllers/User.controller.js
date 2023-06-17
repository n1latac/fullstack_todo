const {User} = require('../models')

module.exports.registrationUser = async(req, res, next) => {
    try {
        const {body} = req
        console.log(body)
        const user = await User.create(body)
        res.status(200).send(user)
    } catch (error) {
        next(error)
    }
}

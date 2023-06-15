module.exports.errorHandler = async(err, req, res, next) => {
    try {
        
        res.status(500).send('unknown error')
    } catch (error) {
        next(error)
    }
}
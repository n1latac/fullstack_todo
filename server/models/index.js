const mongoose = require('mongoose')
const {DB} = require('../configs/db')
const User = require('./User')

mongoose.connect(DB)
.catch((error)=>{
    console.log('error connect')
    process.exit(1)
})

module.exports = {
    User
}
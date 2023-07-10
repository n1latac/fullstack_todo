const http = require('http')
const app = require('./app')

const PORT = process.env.PORT || 5002

const server = http.createServer(app)

server.listen(PORT, ()=> {
    console.log(`Server start on port ${PORT}`)
})
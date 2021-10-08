const express = require('express')
const projectRouter = require('./project/router')
const resourceRouter = require('./resource/router')
const taskRouter = require('./task/router')

const server = express()

server.use(express.json())

server.use('/api/projects', projectRouter)
server.use('/api/resource', resourceRouter)
server.use('/api/task', taskRouter)

server.get('/', (req, res)=>{
    res.send(`<h2>The Beginning of my API for the "Adding Data Persistence" Sprint Challenge</h2>`)
})

module.exports = server
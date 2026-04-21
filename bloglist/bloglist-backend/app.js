const path = require('path')
const express = require('express')
const mongoose = require('mongoose')
const config = require('./utils/config')
const blogsRouter = require('./controllers/blogs')
const logger = require('./utils/logger')

const app = express()

logger.info('Connecting to', config.MONGODB_URI)
mongoose
    .connect(config.MONGODB_URI, { family: 4 })
    .then(() => {
        logger.info('connected to MongoDB')
    })
    .catch((error) => {
        logger.error('error connecting to MongoDB', error.message)
    })

app.use(express.json())
app.use('/api/blogs', blogsRouter)

app.use(express.static(path.join(__dirname, '../bloglist-frontend/dist')))

app.get('/{*splat}', (req, res) => {
    res.sendFile(path.join(__dirname, '../bloglist-frontend/dist/index.html'))
})

module.exports = app
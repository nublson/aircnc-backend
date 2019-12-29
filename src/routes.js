const multer = require('multer')

const uploadConfig = require('./config/upload')
const SessionController = require('./controllers/SessionController')
const SpotController = require('./controllers/SpotController')

const routes = require('express').Router()
const upload = multer(uploadConfig)

routes.post('/sessions', SessionController.store)

routes.get('/spots', SpotController.index)
routes.post('/spots', upload.single('thumbnail'), SpotController.store)

module.exports = routes

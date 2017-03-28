const express = require('express')
const routes = express()

import basicController from './controllers/basicController'
import userController from './controllers/userController'

//basic routes
routes.get('/', basicController.get)

//user routes
routes.post('/signup', userController.post)

module.exports = routes

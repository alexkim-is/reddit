const express = require('express')
const routes = express()

import basicController from './controllers/basicController'
import userController from './controllers/userController'
import postController from './controllers/postController'
import commentController from './controllers/commentController'


//basic routes
routes.get('/', basicController.get)

//user routes
routes.post('/signup', userController.post)

//post routes
routes.post('/post', postController.post)
routes.get('/posts', postController.getAll)

//commnet routes
routes.post('/comment', commentController.post)

module.exports = routes

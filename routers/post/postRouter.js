const express = require('express')
const postRouter = express.Router()
// const UserController = require('../../controllers/UserController')
const PostController = require('../../controllers/PostController')

postRouter.get('/', PostController.index)
postRouter.get('/create', PostController.create) //middleware
postRouter.get('/:id', PostController.show)
postRouter.post('/create', PostController.store)

module.exports = postRouter
const express = require('express')
const postRouter = express.Router()
// const UserController = require('../../controllers/UserController')
const PostController = require('../../controllers/PostController')
const isLogin = require('../../middlewares/isLogin')

postRouter.get('/', PostController.index)
postRouter.get('/create', PostController.create) //middleware
postRouter.get('/:id', isLogin, PostController.show)
postRouter.post('/create', isLogin, PostController.store)
postRouter.post('/delete/:id', (req, res, next) => {
    // console.log()
    if (req.session.user) {
        next()
    } else {
        res.redirect(`/users/login`)
    }
}, PostController.destroy)

module.exports = postRouter
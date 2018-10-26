const express = require('express')
const postRouter = express.Router()
// const UserController = require('../../controllers/UserController')
const PostController = require('../../controllers/PostController')

postRouter.get('/', PostController.index)
postRouter.get('/create', (req, res, next) => {
    if (req.session.user) {
        next()
    } else {
        res.redirect(`/users/login`)
    }
}, PostController.create) //middleware
postRouter.get('/:id', PostController.show)
postRouter.post('/create', (req, res, next) => {
    // console.log()
    if (req.session.user) {
        next()
    } else {
        res.redirect(`/users/login`)
    }
}, PostController.store)
postRouter.post('/delete/:id', (req, res, next) => {
    // console.log()
    if (req.session.user) {
        next()
    } else {
        res.redirect(`/users/login`)
    }
}, PostController.destroy)

module.exports = postRouter
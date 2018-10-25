const express = require('express')
const router = express.Router()
const UserController = require('../../controllers/UserController')
const PostController = require('../../controllers/PostController')


router.get('/', PostController.index)

router.get('/register', UserController.register)
router.post('/add', UserController.store)
router.get('/login', UserController.login)
router.post('/login', UserController.toLogin)
router.get('/posts/create', PostController.create)
// router.post('/posts/create', PostController.store)
// router.get('/posts', PostController.index)
// router.get('/posts/edit/:id', PostController.edit)
// router.post('/posts/edit/:id', PostController.update)
// router.post('/posts/delete/:id', PostController.destroy)





module.exports = router
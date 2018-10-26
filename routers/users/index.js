const express = require('express')
const router = express.Router()
const UserController = require('../../controllers/UserController')
const PostController = require('../../controllers/PostController')


router.get('/', UserController.index)

// router.get('/blog', UserController.showBlog)
// router.get('/blog/:id', UserController.blogId)
router.get('/register', UserController.register)
router.post('/add', UserController.store)
router.get('/login', UserController.login)
router.post('/login', UserController.toLogin)
router.get('/posts/create', PostController.create)
router.post('/posts/create', PostController.store)
router.get('/posts', PostController.showBlog)
router.get('/posts/:id', PostController.posts)
// router.post('/delete/:id', PostController.destroy)
// router.get('/posts/edit/:id', PostController.edit)
// router.post('/posts/edit/:id', PostController.update)
// router.post('/posts/delete/:id', PostController.destroy)

// router.get('/', (req,res) => {
//     res.render('users/index')
// })
// router.get('/login', (req,res) => {
//     res.render('users/login')
// })

// router.get('/about', (req,res) => {
//     res.render('users/about')
// })
// router.get('/testimonial', (req,res) => {
//     res.render('users/testimonial')
// })
// router.get('/contact', (req,res) => {
//     res.render('users/contact')
// })

// router.get('/blog', (req,res) => {
//     res.render('users/blog')
// })

// router.get('/blog', UserController.showBlog)
// router.get('/blog/:id', UserController.blogId)




module.exports = router
const express = require('express')
const router = express.Router()
const Model = require('../../models/index')
const UserController = require('../../controllers/UserController')


router.get('/', (req,res) => {
    res.render('users/index')
})
router.get('/login', (req,res) => {
    res.render('users/login')
})

router.get('/about', (req,res) => {
    res.render('users/about')
})
router.get('/testimonial', (req,res) => {
    res.render('users/testimonial')
})
router.get('/contact', (req,res) => {
    res.render('users/contact')
})

router.get('/blog', (req,res) => {
    res.render('users/blog')
})

router.get('/blog', UserController.showBlog)
router.get('/blog/:id', UserController.blogId)

router.get('/register', UserController.register)
router.post('/add', UserController.store)
router.get('/login', UserController.login)
router.post('/login', UserController.toLogin)




module.exports = router
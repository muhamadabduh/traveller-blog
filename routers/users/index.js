const express = require('express')
const router = express.Router()
const Model = require('../../models/index')
const userController = require('../../controllers/UserController')


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


router.get('/blog', userController.showBlog)
router.get('/blog/:id', userController.blogId)




module.exports = router
const express = require('express')
const router = express.Router()
const Model = require('../../models/index')
const userController = require('../../controllers/users/users')


router.get('/', (req,res) => {
    res.render('users/index')
})

router.get('/blog', userController.showBlog)



module.exports = router
const express = require('express')
const router = express.Router()
const Model = require('../../models/index')
const AdminController = require('../../controllers/AdminController')
const isLogin = require('../../middlewares/isLogin')


router.get('/', isLogin, AdminController.index)
// router.get('/users')
router.get('/posts', (req, res, next) => {
    if (req.session.user) {
        next()
    }
}, AdminController.showPosts)


module.exports = router
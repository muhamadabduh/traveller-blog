const express = require('express')
const router = express.Router()
const Model = require('../../models/index')
const AdminController = require('../../controllers/AdminController')


router.get('/', (req, res, next) => {
    if (req.session.user) {
        next()
    } else {
        res.redirect(`/users/login`)
    }
}, AdminController.index)
// router.get('/users')
router.get('/posts', (req, res, next) => {
    if (req.session.user) {
        next()
    }
}, AdminController.showPosts)


module.exports = router
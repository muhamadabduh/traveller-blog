const express = require('express')
const router = express.Router()
const Model = require('../../models/index')
const AdminController = require('../../controllers/AdminController')


router.get('/', (req, res) => {
    res.render('admin/admin')
})
// router.get('/users')
router.get('/posts', AdminController.showPosts)


module.exports = router
const express = require('express')
const router = express.Router()
const Model = require('../../models/index')
const UserController = require('../../controllers/UserController')


router.get('/', (req,res) => [
    res.render('users/index')
])

router.get('/register', UserController.register)
router.post('/add', UserController.store)
router.get('/login', UserController.login)
router.post('/login', UserController.toLogin)




module.exports = router
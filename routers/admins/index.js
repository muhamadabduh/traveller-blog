const express = require('express')
const router = express.Router()
const Model = require('../../models/index')


router.get('/', (req,res) => [
    res.render('admins/index')
])




module.exports = router
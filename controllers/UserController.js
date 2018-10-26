const express = require('express')
const models = require('../models/index')
const User = models.User
const Post = models.Post
const bcrypt = require('bcryptjs')
const session = require('express-session')

class UserController {

    static index(req, res) {
        Post.findAll()
            .then(posts => {
                res.render('users/index', { posts })
            })
            .catch(err => {
                res.send(err)
            })
    }

    static register(req, res) {
        res.render('users/register', { title: 'Register', content: 'register' })
    }

    static store(req, res) {
        User.create(req.body)
            .then(user => {
                // res.send(user)
                // req.session.user = user
                res.redirect(`/users/login`)
            })
            .catch(err => {
                res.send(err)
            })
    }

    static login(req, res) {
        const message = req.query.message || null
        res.render('users/login', message)
    }

    static toLogin(req, res) {
        User.findOne({
            where: {
                email: req.body.email,
            }
        })
        .then(user => {
            if (bcrypt.compareSync(req.body.password, user.password) === true) {
                let message = `Welcome ${user.name}`
                req.session.user = user
                console.log(req.session.user)
                res.redirect(`/?message=${message}`)
            } else {
                console.log(`masuk 2`)
                let message = `Sorry, your email and password doesn't match with our records`
                res.redirect(`/login/?message=${message}`)
            }
        })
        .catch(err => {
            console.log(err)
            let message = `your email doesn't match with our records, please signup first!`
            res.redirect(`/login/?message=${message}`)
        })
    }

    static destroy(req, res) {
        Post.destroy({
            where: {
                id: req.params.id
            }
        })
            .then(data => {
                let message = `Succesfully deleted`
                console.log(message)
                res.redirect(`/posts`)
            })
            .catch(err => {
                res.send(err)
            })
    }
}


module.exports = UserController
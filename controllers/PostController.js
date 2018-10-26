const models = require('../models/index')
const Post = models.Post
const Tag = models.Tag
const PostTag = models.PostTag

class PostController {
    static index(req, res) {
        Post.findAll()
            .then(posts => {
                // console.log(req.session.user, '===========')
                res.render('users/index', { posts: posts, user: req.session.user })
            })
            .catch(err => {
                res.send(err)
            })
    }

    // tambahkan informasi user untuk keperluan create post baru
    static create(req, res) {
        res.render('admin/admin', { content: 'create-post', title: 'New Post' })
    }

    static show(req, res) {
        Post.findOne({
            where: {
                id: req.params.id
            }
        })
            .then(post => {
                res.render('post/show', { post: post, title: post.title })
            })
            .catch(err => {
                res.send(err)
            })
    }

    static store(req, res) {
        // console.log(req.session.user.id)
        Post.create({
            title: req.body.title,
            image: req.body.image,
            review: req.body.review,
            UserId: req.session.user.dataValues
        })
            .then(data => {
                let message = `succesfully add new Post!`
                res.redirect(`/posts?message=${message}`)
            })
            .catch(err => {
                res.send(err)
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
                res.redirect(`admin/posts/?message=${message}`)
            })
            .catch(err => {
                res.send(err)
            })
    }
}

module.exports = PostController
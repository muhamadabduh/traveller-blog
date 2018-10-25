const models = require('../models/index')
const Post = models.Post

class PostController {
    static index(req, res) {
        Post.findAll()
            .then(posts => {
                res.render('admin/admin', { posts })
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
                res.render('post/show')
            })
            .catch(err => {
                res.send(err)
            })
    }

    static store(req, res) {
        let newPost = req.body
        newPost.UserId = res.session.user.id
        Post.create(newPost)
            .then(data => {
                let message = `succesfully add new Post!`
                res.redirect(`/posts?message=${message}`)
            })
            .catch(err => {
                res.send(err)
            })
    }
}

module.exports = PostController
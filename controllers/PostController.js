const models = require('../models/index')
const Post = models.Post
const Tag = models.Tag
const PostTag = models.PostTag

class PostController {
    static index(req, res) {
        Post.findAll({order: [['id', 'ASC']]})
            .then(posts => {
                res.render('users/index', { posts })
            })
            .catch(err => {
                res.send(err)
            })
    }

    static posts(req,res) {
        Post.findOne({where: {id: req.params.id}},{include: [models.User], order: [['id', 'ASC']]})
        .then((posts) => {
            // res.send(posts)
            res.render('users/postId', {posts})
        })
        .catch(err => {res.send(err)})
    }

    // tambahkan informasi user untuk keperluan create post baru
    // static create(req, res) {
    //     res.render('admin/admin', { content: 'create-post', title: 'New Post' })
    // }

    static create(req,res) {
        Post.create(req.body)
        .then((posts) => {
            res.render('post/create', {posts})
        })
        .catch(err => {res.send(err)})
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
        let tags = req.body.tags.split(',')
        // newPost.UserId = res.session.user.id
        Post.create(newPost)
            .then(data => {
                let message = `succesfully add new Post!`
                res.redirect(`/posts?message=${message}`)
            })
            .catch(err => {
                res.send(err)
            })
    }


    static showBlog(req,res) {
        // console.log('masuk')
        Post.findAll({limit:2})
        .then((posts) => {
            // res.send({posts})
            res.render('users/blog', {posts})
        })
        .catch(err => {res.send(err)})
    }

    static destroy(req,res) {
        Post.destroy({where: {id:req.params.id}})
        .then(() => {
            res.redirect('users/blog')
        })
        .catch(err => {res.send(err)})
    }

}

module.exports = PostController
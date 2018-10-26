const models = require('../models/index')
const Post = models.Post
const User = models.User
const Tag = models.Tag


class AdminController {
    static index(req, res) {
        res.render('admin/admin', { title: 'Admin Page' })
    }

    static showPosts(req, res) {
        Post.findAll()
            .then(posts => {
                res.render('admin/admin', { posts: posts, title: 'All Post', content: 'all-posts' })
            })
            .catch(err => {
                res.send(err)
            })
    }

}


module.exports = AdminController
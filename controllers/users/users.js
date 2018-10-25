const Model = require('../../models/index')

class Users {

    static showBlog(req,res) {
        Model.Post.findAll()
        .then((posts) => {
            res.send(posts)
            res.render('users/blog', {posts})
        })
        .catch(err => {res.send(err)})
    }
}


module.exports = Users
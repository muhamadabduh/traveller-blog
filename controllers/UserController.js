const Model = require('../models/index')

class UserController {

    static showBlog(req,res) {
        // console.log('masuk')
        Model.Post.findAll({include: [Model.User], order: [['id', 'ASC']]})
        .then((posts) => {
            // res.send({posts})
            res.render('users/blog', {posts})
        })
        .catch(err => {res.send(err)})
    }

    static blogId(req,res) {
        Model.Post.findOne({where: {id: req.params.id}},{include: [Model.User], order: [['id', 'ASC']]})
        .then((posts) => {
            // res.send(posts)
            res.render('users/blogId', {posts})
        })
        .catch(err => {res.send(err)})
    }
}


module.exports = UserController
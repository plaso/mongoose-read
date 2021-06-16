const Post = require('../models/Post.model');

module.exports.listPosts = (req, res, next) => {
  Post.find()
    .then((posts) => {
      res.render('index', { posts: posts });
    })
    .catch(e => console.error(e))
}

module.exports.getPost = (req, res, next) => {
  Post.findById(req.params.id)
    .then((post) => res.render('detail', { post: post }))
    .catch(e => console.error(e))
}
const Post = require("../models/Post.model");
const Comment = require("../models/Comment.model");

module.exports.listPosts = (req, res, next) => {
  Post.find()
    .then((posts) => {
      res.render("index", { posts: posts });
    })
    .catch((e) => console.error(e));
};

module.exports.getPost = (req, res, next) => {
  Post.findById(req.params.id)
    .populate("comments")
    .then((post) => {
      res.render("detail", { post: post });
    })
    .catch((e) => console.error(e));
};

module.exports.createPost = (req, res, next) => {
  res.render("postForm");
};

module.exports.doCreatePost = (req, res, next) => {
  Post.create(req.body)
    .then(() => {
      res.redirect("/");
    })
    .catch((e) => console.error(e));
};

module.exports.editPost = (req, res, next) => {
  Post.findById(req.params.id)
    .then((post) => res.render("postForm", post))
    .catch((e) => console.error(e));
};

module.exports.doEditPost = (req, res, next) => {
  const { id } = req.params;
  Post.findByIdAndUpdate(id, req.body)
    .then(() => res.redirect(`/posts/${id}`))
    .catch((e) => console.error(e));
};

module.exports.doDeletePost = (req, res, next) => {
  Post.findByIdAndDelete(req.params.id)
    .then(() => {
      res.redirect("/");
    })
    .catch((e) => console.error(e));
};

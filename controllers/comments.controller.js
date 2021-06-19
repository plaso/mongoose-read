const Comment = require("../models/Comment.model");

module.exports.doCreateComment = (req, res, next) => {
  const { postid: postId } = req.params;
  const post = { ...req.body, postId };
  Comment.create(post)
    .then(() => {
      res.redirect(`/posts/${postId}`);
    })
    .catch((e) => console.error(e));
};

module.exports.deleteComment = (req, res, next) => {
  Comment.findByIdAndDelete(req.params.id)
    .then((c) => {
      res.redirect(`/posts/${c.postId}`);
    })
    .catch((e) => console.error(e));
};

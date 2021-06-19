const router = require('express').Router();
const postsController = require('../controllers/posts.controller')

router.get('/', postsController.listPosts);
// Create
router.get('/posts/create', postsController.createPost); // Shows Post creation form
router.post('/posts/create', postsController.doCreatePost); // Receives Post form and creates Post
 // Read
router.get('/posts/:id', postsController.getPost);
// Update
router.get('/posts/:id/edit', postsController.editPost); // Shows Post edition form
router.post('/posts/:id/edit', postsController.doEditPost); //  Receives Post form and edit Post
// Delete
router.post('/posts/:id/delete', postsController.doDeletePost); //  Deletes Post 


module.exports = router;
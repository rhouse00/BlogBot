const express = require('express');
const router = express.Router();

const postController = require('../controllers/postController');
const { catchErrors } = require('../handlers/errorHandlers');

// SITE VISITOR

// landing page
router.get('/', catchErrors(postController.getPosts) );

// all posts
router.get('/posts', catchErrors(postController.getPosts) );

// all posts paginated
router.get('/posts/page/:page', catchErrors(postController.getPosts) );

// // individual post
// router.get('/posts/:slug', function (){
//     console.log('yippie');
// } );

// // ADMIN pages

// // landing page
// router.get('/admin', function (){
//     console.log('yippie');
// } );

// all posts
router.get('/admin/posts', catchErrors(postController.getAdminPosts));

// // add post page
router.get('/admin/add', catchErrors(postController.addPost));
// edit post page
router.get('/admin/posts/:id', catchErrors(postController.editPost) );

// // create post
router.post('/admin/add', catchErrors(postController.createPost));
// // update post
router.post('/admin/add/:id', catchErrors(postController.updatePost) );

module.exports = router;


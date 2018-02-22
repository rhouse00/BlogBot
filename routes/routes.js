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

// // post creation
// router.get('/admin/new', function (){
//     console.log('yippie');
// } );
// router.post('/admin/new', function (){
//     console.log('yippie');
// } );

// // all posts
// router.get('/admin/posts', function (){
//     console.log('yippie');
// } );

// // add post
router.get('/admin/add', catchErrors(postController.addPost));

// // create post
router.post('/admin/add', catchErrors(postController.createPost));

// edit post
router.get('/admin/post/:id', catchErrors(postController.editPost) );
router.post('/admin/post/:id', function (){
    console.log('yippie');
} );

module.exports = router;


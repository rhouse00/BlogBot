const express = require('express');
const router = express.Router();

// SITE VISITOR

// landing page
router.get('/', function (){
    console.log('yippie');
} );

// all posts
router.get('/posts', function (){
    console.log('yippie');
} );

// individual post
router.get('/posts/:slug', function (){
    console.log('yippie');
} );

// ADMIN pages

// landing page
router.get('/admin', function (){
    console.log('yippie');
} );

// post creation
router.get('/admin/new', function (){
    console.log('yippie');
} );
router.post('/admin/new', function (){
    console.log('yippie');
} );

// all posts
router.get('/admin/posts', function (){
    console.log('yippie');
} );

// edit post
router.get('/admin/post/:id', function (){
    console.log('yippie');
} );
router.post('/admin/post/:id', function (){
    console.log('yippie');
} );

module.exports = router;


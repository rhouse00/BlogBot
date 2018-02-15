const express = require('express');
const router = express.Router();

function filler(){
    console.log('yippie');
}

// SITE VISITOR

// landing page
router.get('/', filler() );

// all posts
router.get('/posts', filler() );

// individual post
router.get('/posts/:slug', filler() );

// ADMIN pages

// landing page
router.get('/admin', filler() );

// post creation
router.get('/admin/new', filler() );
router.post('/admin/new', filler() );

// all posts
router.get('/admin/posts', filler() );

// edit post
router.get('/admin/post/:id', filler() );
router.post('/admin/post/:id', filler() );




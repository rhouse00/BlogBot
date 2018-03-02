const express = require('express');
const router = express.Router();

const postController = require('../controllers/postController');
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');
const { catchErrors } = require('../handlers/errorHandlers');

// SITE VISITOR

// landing page
router.get('/', catchErrors(postController.getPosts) );

// all posts & paginated
router.get('/posts', catchErrors(postController.getPosts) );
router.get('/posts/page/:page', catchErrors(postController.getPosts) );
router.get('/admin/posts/page/:page', catchErrors(postController.getPosts) );

// // individual post
// router.get('/posts/:slug', function (){
//     console.log('yippie');
// } );

// LOGIN / AUTH pages

router.get('/login', userController.loginForm);


router.get('/register', userController.registerForm);
router.post('/register',
   userController.validateRegister,
   userController.register,
   authController.login 
);

// // ADMIN pages

// // landing page
router.get('/admin', (req, res) => {
   res.render('adminLanding', { title: 'Admin Console' } );
});

// all posts
router.get('/admin/posts', catchErrors(postController.getPosts));

// add post page
router.get('/admin/add', catchErrors(postController.addPost));
// edit post page
router.get('/admin/posts/:id', catchErrors(postController.editPost) );

// // create post
router.post('/admin/add', catchErrors(postController.createPost));
// // update post
router.post('/admin/add/:id', catchErrors(postController.updatePost) );

module.exports = router;


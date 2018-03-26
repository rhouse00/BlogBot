const express = require('express');
const router = express.Router();

const postController = require('../controllers/postController');
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');
const emailController = require('../controllers/emailController');
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
router.post('/login',  authController.login);
router.get('/logout', authController.logout);


router.get('/register', userController.registerForm);
router.post('/register',
   userController.validateEmailAndName,
   userController.validatePassword,
   userController.register,
   authController.login 
);

router.get('/admin/accounts', catchErrors(userController.getAccounts));
router.get('/admin/accounts/edit/:id', catchErrors(userController.getAccountById));
router.post('/admin/accounts/edit/:id', 
   userController.validateEmailAndName,
   userController.updateAccount   
);

// // ADMIN pages

// // landing page
router.get('/admin',
   authController.isLoggedIn,
   (req, res) => { res.render('adminLanding', { title: 'Admin Console' } );
});

// all posts
router.get('/admin/posts', 
   authController.isLoggedIn,
   catchErrors(postController.getPosts));

// add post page
router.get('/admin/add', 
   authController.isLoggedIn,
   catchErrors(postController.addPost));
// edit post page
router.get('/admin/posts/:id', 
   authController.isLoggedIn,
   catchErrors(postController.editPost) );

// create post
router.post('/admin/add', catchErrors(postController.createPost));
// update post
router.post('/admin/add/:id', catchErrors(postController.updatePost) );

// send email
router.get('/admin/email', emailController.createEmail);
router.post('/admin/email', catchErrors(emailController.sendEmail));

module.exports = router;


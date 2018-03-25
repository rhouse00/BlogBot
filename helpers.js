exports.moment = require('moment');

exports.siteNavMenu = [
   {title: 'Posts', route: '/posts'},
   {title: 'Register', route: '/register'},
   {title: 'Login', route: '/login'},
   {title: 'Logout', route: '/logout'}
];

exports.adminNavMenuLeft = [
   {title: 'Admin Posts', route: '/admin/posts' },
   {title: 'Add Post', route: '/admin/add'},
   {title: 'Admin Console', route: '/admin'},
   {title: 'Accounts', route: '/admin/accounts'},
   {title: 'Posts', route: '/posts'}
];

exports.adminNavMenuRight = [
   {title: 'Register', route: '/register'},
   {title: 'Login', route: '/login'},
   {title: 'Logout', route: '/logout'}
]

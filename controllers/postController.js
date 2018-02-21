const mongoose = require('mongoose');

const Post = mongoose.model('Post');

exports.getPosts = async (req, res) => {
    const pugFile = 'post';
    const page = req.params.page || '1';
    const limit = '6';
    const skip = (limit * page) - limit;

    const postPromise = Post
        .find()
        // .skip(skip)
        // .limit(limit)
        // .sort({ created: 'desc' });
    
    const countPromise = Post.count();

    const [posts, count] = await Promise.all([postPromise, countPromise]);
    const pages = Math.ceil(count / limit);

    if(!posts.length && skip) {
        res.redirect(`/posts/page/${pages}`);
    }
    res.render('editPost', {'title': 'Posts', posts, count });

};

exports.editPost = async (req, res) => {
    res.json('edit page!');
};

exports.addPost = async (req, res) => {
    res.render('editPost', {title: 'Add / Edit Post'});
}
const mongoose = require('mongoose');

const Post = mongoose.model('Post');

exports.getPosts = async (req, res) => {
    const pugFile = req.path.includes('admin') ? 'adminPosts' : 'posts';
    const pugRoute = pugFile === "adminPosts" ? '/admin/posts/page/' : '/posts/page/';
    const page = req.params.page || '1';
    const limit = 6;
    const skip = (limit * page) - limit;

    const postPromise = Post
        .find()
        .skip(skip)
        .limit(limit)
        .sort({ created: 'desc' });
    
    const countPromise = Post.count();

    const [posts, count] = await Promise.all( [postPromise, countPromise] );
    const pages = Math.ceil(count / limit);

    if(!posts.length && skip) {
        res.redirect(`${pugRoute}${pages}`);
    }
    res.render(pugFile, {'title': 'Posts', posts, count, page, pages, pugRoute });

};

exports.createPost = async (req, res) => {
    const post = await (new Post(req.body)).save();
    res.redirect(`/admin/posts/${post._id}`);
}

exports.editPost = async (req, res, next) => {
    const post = await Post.findOne({_id: req.params.id});
    if(!post) {
        next();
        return;
    }
    res.render('editPost', {post, title: post.title });
};

exports.updatePost = async (req, res) => {
    const post = await Post.findOneAndUpdate({_id: req.params.id}, req.body, {
        new: true
        // runValidators: true - reruns validators
    })
    .exec();

    res.redirect(`/admin/posts/${post.id}`);
}

exports.addPost = async (req, res) => {
    res.render('editPost', {title: 'Add / Edit Post'});
}


const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const slug = require('slug');

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true,
        required: 'Please enter a title'
    },
    content: {
        type: String,
        trim: true,
        required: 'Please insert / add content to your post'
    },
    author: {
        type: String,
        trim: true
    },
    created: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Post', postSchema);
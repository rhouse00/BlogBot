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
    slug: String,
    author: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: 'Please supply an author'
    },
    created: {
        type: Date,
        default: Date.now
    },
    updated: {
        type: Date,
        default: Date.now
    }
});

postSchema.pre('save', async function(next) {
    if(!this.isModified('name')) {
        next();
        return;
    }
    this.slug = slug(this.name);
    const slugRegEx = new RegExp(`^(${this.slug})((-[0-9]*)?)$`, 'i');
    const postWithRegEx = await this.constructor.find({slug: slugRegEx });
    if(postWithRegEx.length) {
        this.slug = `${this.slug}-${postWithRegEx.length+1}`;
    }
    next();
});

function autopopulate(next) {
    this.populate('author', 'name');
    next();
}

postSchema.pre('find', autopopulate);
postSchema.pre('findOne', autopopulate);


module.exports = mongoose.model('Post', postSchema);
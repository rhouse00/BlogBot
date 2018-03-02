const mongoose = require('mongoose');
require('dotenv').config({ path: 'variables.env'});

const PORT = process.env.PORT || 4444;
const [major, minor] = process.versions.node.split('.').map(parseFloat);

if(major < 7 || (major === 7 && minor <= 5) ) {
    console.log('Node version is too damn old! Please upgrade to 7.6 or higher');
    process.exit();
}


// input db connection informaiton here
mongoose.connect(process.env.DATABASE);
mongoose.Promise = global.Promise;
const db = mongoose.connection;

db.on('error', (err) => {
    console.log('Mongoose Error:', err);
})
db.once('open', () => {
    console.log('Mongoose connection successful');
})

// import db models here!!
require('./models/Post');
require('./models/User');

const app = require('./app');
app.set('port', PORT);
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
});

const PORT = process.env.PORT || 4444;

const [major, minor] = process.versions.node.split('.').map(parseFloat);

if(major < 7 || (major === 7 && minor <= 5) ) {
    console.log('Node version is too damn old! Please upgrade to 7.6 or higher');
    process.exit();
}

require('dotenv').config({ path: 'variables.env'});

// input db connection informaiton here

// import db models here!!
// require('./models/....);

const app = require('./app');
app.set('port', PORT);
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
});

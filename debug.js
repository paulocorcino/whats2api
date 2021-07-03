//w2api - Version 0.0.1
const options = {};
const path = require('path'); 
options.port = parseInt(path.basename(path.resolve(__dirname, '.')));

// options.ip = '127.0.0.1';
// options.port = parseInt(process.argv[2]);
// options.port = 9004;
// options.config = { name: 'W2API.js' };
// options.sleep = 3000;
// options.inspector = 9229;
// options.watch = ['private'];

require('total.js/debug')(options);


// Simulate config options from your production environment by
// customising the .env file in your project's root folder.

// Require keystone
var keystone = require('../index');

// Initialise Keystone with your project's configuration.
// See http://keystonejs.com/guide/config for available options
// and documentation.

keystone.init({
	'name': 'key_back',
	'brand': 'key_back',

	'host': 'localhost',
	'port': 3500,

	'mongo': 'mongodb://localhost:27017/key_back',

	'static': 'frontend',
	'favicon': 'frontend/favicon.ico',

	'less': 'frontend',
	'views': 'frontend/views',
	'view engine': 'jade',

	'auto update': true,
	'session': true,
	'auth': true,
	'user model': 'User',
	'cookie secret': 'Secret',

	'cloudinary config': 'cloudinary://928345763556839:vU1M2OmklQuEMU-UaXIvJs4nqCE@dufogbndd',
});

// Load your project's Models
keystone.import('models');

// Load your project's Routes
keystone.set('routes', require('./routes'));

// Setup common locals for your templates. The following are required for the
// bundled templates and layouts. Any runtime locals (that should be set uniquely
// for each request) should be added to ./routes/middleware.js
/* keystone.set('locals', {
	_: require('lodash'),
	env: keystone.get('env'),
	utils: keystone.utils,
	editable: keystone.content.editable,
});*/


// Configure the navigation bar in Keystone's Admin UI
keystone.set('nav', {
	users: 'users',
});

keystone.start();

/**
 * Dependencies
 */

var assert = require('assert');
var index = require('../index.js');
var agent = require('../lib/agent.js');
var media = require('../lib/media.js');
var office = require('../lib/office.js');
var geo = require('../lib/geo.js');
var listing = require('../lib/listing.js');
var openhouse = require('../lib/openhouse.js');

var schemas = [index, agent, media, office, geo, listing, openhouse];

/**
 * Tests
 */

suite('Object Creation')
test('Check Schemas', function(){
	for(var i = 0; i < schemas.length; i++){	// beware for-loops that have function callbacks inside!
 		assert('object' === typeof schemas[i], 'object exists')
	}
});

test('Parse Contents', function(){
	schemas.forEach(function(schema){		// traverses each element in the schemas array
		Object.keys(schema).forEach(function(key){		// creates an array of all the enumurable keys for each schema, and traverses them
			assert(schema[key].indexOf != -1, 'content exists')		// checks each element to see if at has a correctly associated key
		});
	});
});
// essentially checks for missing declarations/syntax errors
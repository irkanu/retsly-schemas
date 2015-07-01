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
var subschemas = [agent, media, office, geo, listing, openhouse]; 
var types = ['object', 'string', 'date', 'array', 'number', 'boolean']
/**
 * Tests
 */

suite('Object Creation')
test('Check Schemas', function(){
	for(var i = 0; i < schemas.length; i++){
 		assert('object' === typeof schemas[i], 'object exists');
	}
});

test('Parse Contents', function(){
	subschemas.forEach(function(schema){
		//console.log('first',schema);
		Object.keys(schema).forEach(function(key){	
			//console.log('second',schema[key]);
			assert(types.indexOf(schema[key].type) !== -1, 'content exists');
		});
	});
});
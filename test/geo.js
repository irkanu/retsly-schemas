/**
 * Dependencies
 */

var assert = require('assert');
var geo = require('../lib/geo.js');

var testGeo = {
	type: 'identification',
	coordinates: 'mlsMediaID'
}

/**
 * Tests
 */

suite('Geo Schema')
	test('Object Creation', function(){
		assert('object' == typeof geo, 'object exists')
	});

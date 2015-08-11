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
var types = ['object', 'string', 'date', 'array', 'number', 'boolean'];
var subtypes = ['object', 'string', 'number'];

/**
 * Tests
 */
suite('Object Creation');

test('Check Schemas', function(){
  for(var i = 0; i < schemas.length; i++){
    assert('object' === typeof schemas[i], 'object exists');
  }
});

test('Parse Contents', function(){
  subschemas.forEach(function(schema){
    Object.keys(schema).forEach(function(key){	
      assert(types.indexOf(schema[key].type) !== -1, 'content exists');
      if(schema[key].subtype){
        assert(subtypes.indexOf(typeof schema[key].subtype) !== -1, 'subtypes valid');
      } 
    });
  });
});

test('Check Descriptions', function(){
  subschemas.forEach(function(schema){
    Object.keys(schema).forEach(function(key){
      assert(typeof schema[key].desc === 'string', 'descriptions included');
    });
  });
});
/**
 * Dependencies
 */

var assert = require('assert');
var agent = require('../lib/agent.js');
var media = require('../lib/media.js');
var office = require('../lib/office.js');
var geo = require('../lib/geo.js');
var listing = require('../lib/listing.js');
var openhouse = require('../lib/openhouse.js');
var map = require('../lib/map.js');

var parcel = require('../lib/parcel.js');
var assessment = require('../lib/assessment.js');
var transaction = require('../lib/transaction.js');

var schemas = [agent, media, office, geo, listing,
  openhouse, parcel, assessment, transaction, map];
var subschemas = [agent, media, office, geo, listing, openhouse];
var types = ['object', 'string', 'array', 'number', 'boolean'];
var subtypes = ['object', 'string', 'number'];
var formats = ['date-time'];

/**
 * Tests
 */
suite('Object Creation');

test('Check Schemas', function(){

  //make sure index is valid
  require('../index');

  for(var i = 0; i < schemas.length; i++){
    var schema = schemas[i];
    assert('object' === typeof schemas[i], 'object exists');

    // Each field has a type
    Object.keys(schema).forEach(function(key){
      assert(types.indexOf(schema[key].type) !== -1, 'Invalid type for: ' + key);
      if (schema[key].format) {
        assert(formats.indexOf(schema[key].format) !== -1, 'Invalid format.');
      }
    });
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
      assert(typeof schema[key].desc === 'string', 'description included for '+key);
    });
  });
});

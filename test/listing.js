/**
 * Dependencies
 */

var assert = require('assert')
var listing = require('../lib/listing.js')
var geoSchema = require('../lib/geo.js')
var mediaSchema = require('../lib/media.js')

var testListing = {	id: {type:'string'},
                    mlsListingID: {type:'string'},
                    address: {type:'string'},
                    unitNumber: {type:'string'},
                    streetName: {type:'string'},
                    streetNumber: {type:'string'},
                    city: {type:'string'},
                    state: {type:'string'},
                    county: {type:'string'},
                    country: {type:'string'},
                    zipCode: {type:'string'},
                    _geo: {
                      subtype: geoSchema,
                      type:'object'
                    },
                    latitude: {type:'number'},
                    longitude: {type:'number'},
                    listDate: {type:'date'},
                    lastModified : {type:'date'},
                    importDate:  {type:'date'},
                    price: {type:'number'},
                    yearBuilt: {type:'number'},
                    acres: {type:'number'},
                    squareFootage: {type:'number'},
                    livingArea: {type:'number'},
                    stories: {type:'number'},
                    subdivision: {type:'string'},
                    baths: {type:'number'},
                    bedrooms: {type:'number'},
                    fireplaces: {type:'number'},
                    garageSpaces: {type:'number'},
                    halfBaths: {type:'number'},
                    pool: {type:'boolean'},
                    type: {type:'string'},
                    subtype: {type:'string'},
                    publicRemarks: {type:'string'},
                    media: {
                      type:'array',
                      subtype: mediaSchema
                    },
                	  agent: {type:'string'},
                    mlsAgentID: {type:'string'},
                    office: {type:'string'},
                    mlsOfficeID: {type:'string'},
                    status: {type:'string'}
};

/**
 * Tests
 */

 suite('Listing Schema')
	test('Object Creation', function(){
		assert('object' == typeof listing, 'object exists')
	});

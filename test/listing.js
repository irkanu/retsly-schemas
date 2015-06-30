/**
 * Dependencies
 */

var assert = require('assert')
var listing = require('../lib/listing.js')
var geoSchema = require('../lib/geo.js')
var mediaSchema = require('../lib/media.js')

var testListing = {	id: 'identification',
                    mlsListingID: 'mlsListingID',
                    address: 'address',
                    unitNumber: 'unitNumber',
                    streetName: 'streetName',
                    streetNumber: 'streetNumber',
                    city: 'Vancouver',
                    state: 'state',
                    county: 'county',
                    country: 'country',
                    zipCode: 'bbcjj6',
                    _geo: {
                      subtype: geoSchema,
                      type:'object'
                    },
                    latitude: 49.2827,
                    longitude: 123.1207,
                    listDate: new Date('June 30, 2015'),
                    lastModified: new Date('June 30, 2015'),
                    importDate: new Date('June 30, 2015'),
                    price: 1500000,
                    yearBuilt: 2002,
                    acres: 1,
                    squareFootage: 1200,
                    livingArea: 4,
                    stories: 3,
                    subdivision: 'no',
                    baths: 6,
                    bedrooms: 6,
                    fireplaces: 2,
                    garageSpaces: 2,
                    halfBaths: 2,
                    pool: 'yes',
                    type: 'type',
                    subtype: 'subtype',
                    publicRemarks: 'really nice',
                    media: {
                      type:'array',
                      subtype: mediaSchema
                    },
                	  agent: 'agent',
                    mlsAgentID: 'mlsAgentID',
                    office: 'office',
                    mlsOfficeID: 'mlsOfficeID',
                    status: 'status'
};

/**
 * Tests
 */

 suite('Listing Schema')
	test('Object Creation', function(){
		assert('object' == typeof listing, 'object exists')
	});

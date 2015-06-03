var mediaSchema = require('./media');
var geoSchema = require('./geo');

module.exports = {
  id: {type:'string'},
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
  mlsStatus: {type:'string'},
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
  status: {type:'string', enum: ['active', 'inactive']}
};

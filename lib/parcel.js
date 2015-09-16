var building = require('./pub-subdocs').building;
var address = require('./pub-subdocs').address;

module.exports = {
  id: {type: 'number'},
  apn: {type: 'string'},
  fips: {type: 'string'},
  county: {type: 'string'},
  state: {type: 'string'},

  landUseGeneral: {type:  'string'},
  landUseCode: {type:  'string'},
  landUseDescription: {type: 'string'},
  zoningCode: {type: 'string'},
  zoningDescription: {type: 'string'},

  lotSizeAcres: {type: 'number'},
  lotSizeSquareFeet: {type: 'number'},
  lotSizeFrontage: {type: 'number'},
  lotSizeDepth: {type: 'number'},
  lotSizeIrregular: {type: 'string'},
  lotTopography: {type: 'string'},
  numberOfBuildings: {type: 'number'},

  building: {type: 'object', subtype: building},

  ownerName: {type: 'string'},

  address: {type: 'object', subtype: address},

  legal: {type: 'object'},

  coordinates: {type: 'object'}
};

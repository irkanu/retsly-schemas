var descriptions = require('./zestimate-desc');
var addDescriptions = require('./utils').addDescriptions;

var zestimateSchema = {
  zpid: {type: 'string'},
  links: {type: 'object'},
  address: {type: 'object'},
  zestimate: {type: 'object'},
  localRealEstate: {type: 'object'}
};

module.exports = addDescriptions(zestimateSchema, descriptions);

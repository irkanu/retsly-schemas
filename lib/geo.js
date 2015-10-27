var descriptions = require('./geo-desc');
var addDescriptions = require('./utils').addDescriptions;

var geoSchema = {
  type: {type: 'string', default: 'Point'},
  coordinates: {type: 'array', subtype: 'number'}
};

module.exports = addDescriptions(geoSchema, descriptions);

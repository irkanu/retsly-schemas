var descriptions = require('./vendor-desc');
var addDescriptions = require('./utils').addDescriptions;

var vendorSchema = {
  vendorID: {type: 'string'},
  name: {type: 'string'},
  logo: {type: 'string'},
  test: {type: 'boolean'},
  type: {type: 'string'},
  update: {type: 'string', format: 'date-time'},
  center: {type: 'array', subtype: 'number'},
  boundary: {type: 'array', subtype: 'array'},
  activeAgents: {type:'string'},
  activeListings: {type:'string'},
  activeOffices: {type:'string'}
};

module.exports = addDescriptions(vendorSchema, descriptions);

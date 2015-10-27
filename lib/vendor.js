var descriptions = require('./vendor-desc');
var addDescriptions = require('./utils').addDescriptions;

var vendorSchema = {
  vendorID: {type:'string'},
  name: {type:'string'},
  logo: {type:'string'},
  test: {type:'boolean'},
  type: {type:'string'},
  update: {type:'date'},
  crud: {type:'array', subtype: 'string'},
  center: {type:'array', subtype: 'number'},
  boundary: {type:'array', subtype: 'array'}
};

module.exports = addDescriptions(vendorSchema, descriptions);

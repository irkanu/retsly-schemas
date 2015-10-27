var descriptions = require('./office-desc');
var addDescriptions = require('./utils').addDescriptions;

var officeSchema = {
  id: {type: 'string'},
  mlsOfficeID: {type: 'string'},
  type: {type: 'string'},
  address: {type: 'string'},
  city: {type: 'string'},
  fax: {type: 'string'},
  email: {type: 'string'},
  name: {type: 'string'},
  phone: {type: 'string'},
  state: {type: 'string'},
  zipCode: {type: 'string'},
  status: {type: 'string'},
};

module.exports = addDescriptions(officeSchema, descriptions);

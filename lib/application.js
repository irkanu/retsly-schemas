var descriptions = require('./application-desc');
var addDescriptions = require('./utils').addDescriptions;

var applicationSchema = {
  name: {type: 'string'},
  status: {type: 'string'},
  domains: {type: 'string', subtype: 'string'},
  vendors: {type: 'array', subtype: 'object'},
  icon: {type: 'object'},
  screenshots: {type: 'array', subtype: 'object'},
  clientId: {type: 'string'},
  user: {type: 'object'},
  secret: {type: 'string'}
};

module.exports = addDescriptions(applicationSchema, descriptions);

var descriptions = require('./user-desc');
var addDescriptions = require('./utils').addDescriptions;

var userSchema = {
  id: {type: 'string'},
  firstName: {type: 'string'},
  lastName: {type: 'string'},
  email: {type: 'string'},
  tokens: {type: 'object'}
};

module.exports = addDescriptions(userSchema, descriptions);

var mediaSchema = require('./media');
var descriptions = require('./agent-desc');
var addDescriptions = require('./utils').addDescriptions;

var agentSchema = {
  id: {type: 'string'},
  mlsAgentID: {type: 'string'},
  firstName: {type: 'string'},
  lastName: {type: 'string'},
  middleName: {type: 'string'},
  fullName: {type: 'string'},
  title: {type: 'string'},
  email: {type: 'string'},
  cellPhone: {type: 'string'},
  homePhone: {type: 'string'},
  office: {type: 'string'},
  mlsOfficeID: {type: 'string'},
  officePhone: {type: 'string'},
  officeName: {type: 'string'},
  status: {type: 'string'},
  media: {type: 'array', subtype: mediaSchema},
  url: {type: 'string'},
  lastModified: {type: 'string', format: 'date-time'}
};

module.exports = addDescriptions(agentSchema, descriptions);

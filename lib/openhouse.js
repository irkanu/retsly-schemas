var descriptions = require('./openhouse-desc');
var addDescriptions = require('./utils').addDescriptions;

var openhouseSchema = {
  id: {type: 'string'},
  mlsOpenhouseID: {type: 'string'},
  listing: {type: 'string'},
  mlsListingID: {type: 'string'},
  agent: {type: 'string'},
  mlsAgentID: {type: 'string'},
  date: {type: 'string', format: 'date-time'},
  startTime: {type: 'string', format: 'date-time'},
  endTime: {type: 'string', format: 'date-time'},
  type: {type: 'string'},
  remarks: {type: 'string'},
  status: {type: 'string'},
  url: {type: 'string'}
};

module.exports = addDescriptions(openhouseSchema, descriptions);

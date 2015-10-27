var descriptions = require('./openhouse-desc');
var addDescriptions = require('./utils').addDescriptions;

var openhouseSchema = {
  id: {type: 'string'},
  mlsOpenhouseID: {type: 'string'},
  listing: {type: 'string'},
  mlsListingID: {type: 'string'},
  agent: {type: 'string'},
  mlsAgentID: {type: 'string'},
  date: {type: 'date'},
  startTime: {type: 'date'},
  endTime: {type: 'date'},
  type: {type: 'string'},
  remarks: {type: 'string'},
  status: {type: 'string'}
};

module.exports = addDescriptions(openhouseSchema, descriptions);

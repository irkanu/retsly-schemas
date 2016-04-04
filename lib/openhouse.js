var descriptions = require('./openhouse-desc');
var addDescriptions = require('./utils').addDescriptions;

var openhouseSchema = {
  id: {type: 'string'},
  mlsOpenhouseID: {type: 'string'},
  listing: {type: 'string'},
  mlsListingID: {type: 'string'},
  agent: {type: 'string'},
  mlsAgentKey: {type: 'string'},
  date: {type: 'string', format: 'date-time'},
  startTime: {type: 'string', format: 'date-time'},
  endTime: {type: 'string', format: 'date-time'},
  type: {type: 'string'},
  remarks: {type: 'string'},
  status: {type: 'string'},
  url: {type: 'string'}
};

var ddMap = {
  mlsOpenhouseID: 'OpenHouseKey',
  date: 'OpenHouseDate',
  startTime: 'OpenHouseStartTime',
  endTime: 'OpenHouseEndTime',
  type: 'OpenHouseType',
  remarks: 'OpenHouseRemarks',
  status: 'Status',
  mlsAgentKey: 'ShowingAgentKey',
  mlsListingID: 'ListingKey'
};

module.exports = addDescriptions(openhouseSchema, descriptions, ddMap);

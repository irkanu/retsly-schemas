
var RestlySchema = require('./schema');

var openhouseSchema = {
  openhouseID: {type:'string', project:'OpenHouseKey'},
  listingID: {type:'string', project:'ListingKey'},
  date: {type:'string', project:'OpenHouseDate'},
  startTime: {type:'string', project:'OpenHouseStartTime'},
  endTime: {type:'string', project:'OpenHouseEndTime'},
  agentID: {type:'string', project:'ShowingAgentKey'},
  type: {type:'string', project:'OpenHouseType'},
  remarks: {type:'string', project:'OpenHouseRemarks'},
  status: {type:'string', project:'Status'}
};

module.exports = new RestlySchema(openhouseSchema);

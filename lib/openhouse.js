var desc = require('./openhouse-desc');

module.exports = {
  id: {type:'string', desc: desc.id},
  mlsOpenhouseID: {type:'string', desc: desc.mlsOpenhouseID},
  listing: {type:'string', desc: desc.listing},
  mlsListingID: {type:'string', desc: desc.mlsListingID},
  agent: {type:'string', desc: desc.agent},
  mlsAgentID: {type:'string', desc: desc.mlsAgentID},
  date: {type:'date', desc: desc.date},
  startTime: {type:'date', desc: desc.startTime},
  endTime: {type:'date', desc: desc.endTime},
  type: {type:'string', desc: desc.type},
  remarks: {type:'string', desc: desc.remarks},
  status: {type:'string', desc: desc.status}
};

var mediaSchema = require('./media');
var desc = require('agent-desc.js');

module.exports = {
  id: {type:'string', desc: desc.id},
  mlsAgentID: {type:'string', desc: desc.mlsAgentID},
  firstName: {type:'string', desc: desc.firstName},
  lastName: {type:'string', desc: desc.lastName},
  middleName: {type:'string', desc: desc.middleName},
  fullName: {type:'string', desc: desc.fullName},
  title: {type:'string', desc: desc.title},
  email: {type:'string', desc: desc.email},
  cellPhone: {type:'string', desc: desc.cellPhone},
  homePhone: {type:'string', desc: desc.homePhone},
  office: {type: 'string', desc: desc.office},
  mlsOfficeID: {type:'string', desc: desc.mlsOfficeID},
  officePhone: {type:'string', desc: desc.officePhone},
  officeName: {type:'string', desc: desc.officeName},
  status: {type:'string', desc: desc.status},
  media: {type:'array', subtype: mediaSchema, desc: desc.media},
  lastModified: {type:'date', desc: desc.lastModified}
};

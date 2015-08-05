var desc = require('./office-desc');

module.exports = {
  id: {type:'string', desc: desc.id},
  mlsOfficeID: {type:'string', desc: desc.mlsOfficeID},
  type: {type:'string', desc: desc.type},
  address: {type:'string', desc: desc.address},
  city: {type:'string', desc: desc.city},
  fax: {type:'string', desc: desc.fax},
  email: {type:'string', desc: desc.email},
  name: {type:'string', desc: desc.name},
  phone: {type:'string', desc: desc.phone},
  state: {type:'string', desc: desc.state},
  zipCode: {type:'string', desc: desc.zipCode},
  status: {type:'string', desc: desc.status},
  lastModified: {type:'date', desc: desc.lastModified}
};

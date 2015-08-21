var desc = require('./vendor-desc');

module.exports = {
  vendorID: {type:'string', desc: desc.vendorID},
  name: {type:'string', desc: desc.name},
  logo: {type:'string', desc: desc.logo},
  test: {type:'boolean', desc: desc.test},
  type: {type:'string', desc: desc.type},
  update: {type:'date', desc: desc.update},
  crud: {type:'array', subtype: 'string', desc: desc.crud},
  center: {type:'array', subtype: 'number', desc: desc.center},
  boundary: {type:'array', subtype: 'array', desc: desc.boundary}
};

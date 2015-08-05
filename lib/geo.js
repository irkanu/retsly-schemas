var desc = require('./geo-desc');

module.exports = {
  type: {type:'string', default:'Point', desc: desc.type},
  coordinates: {type:'array', subtype:'number', desc: desc.coordinates}
};

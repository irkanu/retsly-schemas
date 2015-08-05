var desc = require('geo-desc.js')

module.exports = {
  type: {type:'string', default:'Point', desc: desc.type},
  coordinates: {type:'array', subtype:'number', , desc: desc.coordinates}
};

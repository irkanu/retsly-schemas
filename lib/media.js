var desc = require('media-desc.js');

module.exports = {
  id: {type:'string', desc: desc.id},
  mlsMediaID: {type:'string', desc: desc.mlsMediaID},
  url: {type:'string', desc: desc.url},
  shortDescription: {type:'string', desc: desc.shortDescription},
  mimeType: {type:'string', desc: desc.mimeType},
  index: {type:'number', desc: desc.index}
};

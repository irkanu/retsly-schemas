var descriptions = require('./media-desc');
var addDescriptions = require('./utils').addDescriptions;

var mediaSchema = {
  id: {type: 'string'},
  mlsMediaID: {type: 'string'},
  url: {type: 'string'},
  shortDescription: {type: 'string'},
  mimeType: {type: 'string'},
  index: {type: 'number'}
};

module.exports = addDescriptions(mediaSchema, descriptions);

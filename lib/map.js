/*
 * This Resource is returned by the /maps endpoints
 */

// Listing schema description
var listDesc = require('./listing-desc.js');

module.exports = {
  coordinates: {
    type: 'array',
    subtype: 'number',
    desc: listDesc.coordinates
  },
  id: {
    type: 'string',
    desc: listDesc.id
  },
  url: {
    type: 'string',
    desc: listDesc.url
  }
};

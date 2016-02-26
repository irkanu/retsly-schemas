/*
 * This Resource is returned by the /maps endpoints
 */

// Listing schema description
var listDesc = require('./listing-desc.js');

module.exports = {
  coordinates: {
    type: 'array',
    subtype: 'number',
    description: listDesc.coordinates
  },
  id: {
    type: 'string',
    description: listDesc.id
  },
  url: {
    type: 'string',
    description: listDesc.url
  }
};

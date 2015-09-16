var agent = require('./lib/agent');
var office = require('./lib/office');
var listing = require('./lib/listing');
var openhouse = require('./lib/openhouse');
var media = require('./lib/media');
var vendor = require('./lib/vendor');

var parcel = require('./lib/parcel');
var assessment = require('./lib/assessment');
var transaction = require('./lib/transaction');

module.exports = {
  agent: agent,
  office: office,
  listing: listing,
  openhouse: openhouse,
  media: media,
  vendor: vendor,
  parcel: parcel,
  assessment: assessment,
  transaction: transaction
};

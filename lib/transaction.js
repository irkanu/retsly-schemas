var descriptions = require('./transaction-desc');
var addDescriptions = require('./utils').addDescriptions;

var transactionSchema = {
  id: {type: 'number'},
  fips: {type: 'string'},
  county: {type: 'string'},
  state: {type: 'string'},
  recordType: {type: 'string'},
  recordingDate: {type: "date"},
  recordingBookNumber: {type: 'string'},
  recordingPageNumber: {type: 'string'},
  documentTypeCode: {type: 'string'},
  documentType: {type: 'string'},
  documentDate: {type: "date"},
  signatureDate: {type: "date"},
  effectiveDate: {type: "date"},
  buyerVesting: {type:  'string'},
  buyerMultiVesting: {type: 'string'},
  partialInterestTransfer: {type:  'string'},
  partialInterestTransferPercent: {type: 'number'},
  salesPrice: {type: 'number'},
  cityTransferTax: {type: 'number'},
  countyTransferTax: {type: 'number'},
  stateTransferTax: {type: 'number'},
  totalTransferTax: {type: 'number'},
  intraFamilyTransfer: {type: 'string'},
  transferTaxExempt: {type: 'string'},
  buyerName: {type: 'string'},
  sellerName: {type: 'string'},
  borrowerVesting: {type: 'string'},
  lenderName: {type: 'string'},
  lenderType: {type:  'string'},
  lenderID: {type:  'string'},
  loanAmount: {type: 'number'},
  loanAmountDescription: {type: 'string'},
  parcels: {type: 'object'}
};

module.exports = addDescriptions(transactionSchema, descriptions);

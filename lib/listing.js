var mediaSchema = require('./media');
var geoSchema = require('./geo');

module.exports = {
  id: {type:'string'},
  mlsListingID: {type:'string'},
  address: {type:'string'},
  unitNumber: {type:'string'},
  streetName: {type:'string'},
  streetNumber: {type:'string'},
  city: {type:'string'},
  state: {type:'string'},

  county: {type:'string'},
  country: {type:'string'},
  zipCode: {type:'string'},
  subdivision: {type:'string'},
  _geo: {
    subtype: geoSchema,
    type:'object'
  },
  latitude: {type:'number'},
  longitude: {type:'number'},
  listDate: {type:'date'},
  lastModified: {type:'date'},

  price: {type:'number'},
  previousPrice: {type:'number'},
  originalPrice: {type:'number'},
  closePrice: {type:'number'},

  contingency: {type:'string'},
  disclosures: {type:'string'},

  unitsInBuilding: {type:'number'},

  cancelationDate: {type:'date'},
  expirationDate: {type:'date'},
  termsOfSale: {type:'string'},
  dateListed: {type:'date'},
  dateSold: {type:'date'},
  statusChange: {type:'date'},
  ownership: {type:'string'},

  financialDataSource: {type:'string'},

  importDate:  {type:'date'},
  yearBuilt: {type:'number'},
  yearBuiltDetails: {type:'string'},
  daysOnMarket: {type:'number'},
  appliances: {type:'string'},
  telephoneService: {type:'string'},

  view: {type:'string'},
  waterfront: {type:'boolean'},
  waterSource: {type:'string'},
  zoning: {type:'string'},
  zoningDescription: {type:'string'},

  acres: {type:'number'},
  squareFootage: {type:'number'},
  livingArea: {type:'number'},
  aboveGradeFinishedArea: {type: 'number'},
  belowGradeFinishedArea: {type: 'number'},

  stories: {type:'number'},
  storiesTotal: {type:'number'},
  baths: {type:'number'},
  halfBaths: {type:'number'},
  bedrooms: {type:'number'},
  roomsTotal: {type:'number'},
  fireplaces: {type:'number'},
  fireplaceFeatures: {type:'string'},
  exteriorFeatures: {type:'string'},

  flooring: {type:'string'},
  foundationDetails: {type:'string'},
  frontageLength: {type:'number'},
  gas: {type:'string'},
  accessibilityFeatures: {type:'string'},
  cooling: {type:'string'},
  heating: {type:'string'},
  parcelNumber: {type:'string'},
  additionalParcels: {type:'boolean'},
  occupantType: {type:'string'},
  pool: {type:'boolean'},
  poolFeatures: {type:'string'},
  poolPrivate: {type:'boolean'},
  possession: {type:'string'},
  roadSurface: {type:'string'},
  roof: {type:'string'},
  constructionMaterials: {type:'string'},
  sewer: {type:'string'},

  garageSpaces: {type:'number'},
  carportSpaces: {type:'number'},
  openParking: {type:'boolean'},
  laundry: {type:'string'},
  
  type: {type:'string'},
  subtype: {type:'string'},
  publicRemarks: {type:'string'},
  privateRemarks: {type:'string'},

  media: {
    type:'array',
    subtype: mediaSchema
  },
  agent: {type:'string'},
  mlsAgentID: {type:'string'},
  office: {type:'string'},
  mlsOfficeID: {type:'string'},
  status: {type:'string'},

  taxAssessedValue: {type:'number'},
  taxAnnual: {type:'number'},
  taxYear: {type:'date'},
  taxStatus: {type:'string'}
};

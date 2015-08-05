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
  yearBuiltDetails: {type:'array', subtype:'string'},
  daysOnMarket: {type:'number'},
  appliances: {type:'array', subtype:'string'},
  telephoneService: {type:'array', subtype:'string'},

  view: {type:'string'},
  waterfront: {type:'boolean'},
  waterSource: {type:'array', subtype:'string'},
  zoning: {type:'string'},
  zoningDescription: {type:'string'},

  acres: {type:'number'},
  squareFootage: {type:'number'},
  livingArea: {type:'number'},
  aboveGradeFinishedArea: {type: 'number'},
  belowGradeFinishedArea: {type: 'number'},

  stories: {type:'number'},
  storiesTotal: {type:'number'},
  subdivision: {type:'string'},
  baths: {type:'number'},
  halfBaths: {type:'number'},
  bedrooms: {type:'number'},
  roomsTotal: {type:'number'},
  fireplaces: {type:'number'},
  fireplaceFeatures: {type:'array', subtype:'string'},
  exteriorFeatures: {type:'string'},

  flooring: {type:'array', subtype:'string'},
  foundationDetails: {type:'string'},
  frontageLength: {type:'number'},
  gas: {type:'array', subtype:'string'},
  accessibilityFeatures: {type:'array', subtype:'string'},
  cooling: {type:'array', subtype:'string'},
  heating: {type:'array', subtype:'string'},
  parcelNumber: {type:'string'},
  additionalParcels: {type:'boolean'},
  occupantType: {type:'string'},
  pool: {type:'boolean'},
  poolFeatures: {type:'string'},
  poolPrivate: {type:'boolean'},
  possession: {type:'string'},
  roadSurface: {type:'string'},
  roof: {type:'array', subtype:'string'},
  constructionMaterials: {type:'array', subtype:'string'},
  sewer: {type:'array', subtype:'string'},

  garageSpaces: {type:'number'},
  carportSpaces: {type:'number'},
  openParking: {type:'boolean'},
  laundry: {type:'array', subtype:'string'},
  
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

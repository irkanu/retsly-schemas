var mediaSchema = require('./media');
var geoSchema = require('./geo');
var desc = require('./listing-desc');

module.exports = {
  id: {type:'string', desc: desc.id},
  mlsListingID: {type:'string', desc: desc.mlsListingID},
  address: {type:'string', desc: desc.address},
  unitNumber: {type:'string', desc: desc.unitNumber},
  streetName: {type:'string', desc: desc.streetName},
  streetNumber: {type:'string', desc: desc.streetNumber},
  city: {type:'string', desc: desc.city},
  state: {type:'string', desc: desc.state},

  county: {type:'string', desc: desc.county},
  country: {type:'string', desc: desc.country},
  zipCode: {type:'string', desc: desc.zipCode},
  subdivision: {type:'string', desc: desc.subdivision},
  _geo: {
    subtype: geoSchema,
    type:'object',
    desc: desc._geo
  },
  latitude: {type:'number', desc: desc.latitude},
  longitude: {type:'number', desc: desc.longitude},
  listDate: {type:'date', desc: desc.listDate},
  lastModified: {type:'date', desc: desc.lastModified},

  price: {type:'number', desc: desc.price},
  previousPrice: {type:'number', desc: desc.previousPrice},
  originalPrice: {type:'number', desc: desc.originalPrice},
  closePrice: {type:'number', desc: desc.closePrice},

  contingency: {type:'string', desc: desc.contingency},
  disclosures: {type:'string', desc: desc.disclosures},

  unitsInBuilding: {type:'number', desc: desc.unitsInBuilding},

  cancelationDate: {type:'date', desc: desc.cancelationDate},
  expirationDate: {type:'date', desc: desc.expirationDate},
  termsOfSale: {type:'string', desc: desc.termsOfSale},
  dateListed: {type:'date', desc: desc.dateListed},
  dateSold: {type:'date', desc: desc.dateSold},
  statusChange: {type:'date', desc: desc.statusChange},
  ownership: {type:'string', desc: desc.ownership},

  financialDataSource: {type:'string', desc: desc.financialDataSource},

  importDate:  {type:'date', desc: desc.importDate},
  yearBuilt: {type:'number', desc: desc.yearBuilt},
  yearBuiltDetails: {type:'string', desc: desc.yearBuiltDetails},
  daysOnMarket: {type:'number', desc: desc.daysOnMarket},
  appliances: {type:'string', desc: desc.appliances},
  telephoneService: {type:'string', desc: desc.telephoneService},

  view: {type:'string', desc: desc.view},
  waterfront: {type:'boolean', desc: desc.waterfront},
  waterSource: {type:'string', desc: desc.waterSource},
  zoning: {type:'string', desc: desc.zoning},
  zoningDescription: {type:'string', desc: desc.zoningDescription},

  acres: {type:'number', desc: desc.acres},
  squareFootage: {type:'number', desc: desc.squareFootage},
  livingArea: {type:'number', desc: desc.livingArea},
  aboveGradeFinishedArea: {type: 'number', desc: desc.aboveGradeFinishedArea},
  belowGradeFinishedArea: {type: 'number', desc: desc.belowGradeFinishedArea},

  stories: {type:'number', desc: desc.stories},
  storiesTotal: {type:'number', desc: desc.storiesTotal},
  baths: {type:'number', desc: desc.baths},
  halfBaths: {type:'number', desc: desc.halfBaths},
  bedrooms: {type:'number', desc: desc.bedrooms},
  roomsTotal: {type:'number', desc: desc.roomsTotal},
  fireplaces: {type:'number', desc: desc.fireplaces},
  fireplaceFeatures: {type:'string', desc: desc.fireplaceFeatures},
  exteriorFeatures: {type:'string', desc: desc.exteriorFeatures},

  flooring: {type:'string', desc: desc.flooring},
  foundationDetails: {type:'string', desc: desc.foundationDetails},
  frontageLength: {type:'number', desc: desc.frontageLength},
  gas: {type:'string', desc: desc.gas},
  accessibilityFeatures: {type:'string', desc: desc.accessibilityFeatures},
  cooling: {type:'string', desc: desc.cooling},
  heating: {type:'string', desc: desc.heating},
  parcelNumber: {type:'string', desc: desc.parcelNumber},
  additionalParcels: {type:'boolean', desc: desc.additionalParcels},
  occupantType: {type:'string', desc: desc.occupantType},
  pool: {type:'boolean', desc: desc.pool},
  poolFeatures: {type:'string', desc: desc.poolFeatures},
  poolPrivate: {type:'boolean', desc: desc.poolPrivate},
  possession: {type:'string', desc: desc.possession},
  roadSurface: {type:'string', desc: desc.roadSurface},
  roof: {type:'string', desc: desc.roof},
  constructionMaterials: {type:'string', desc: desc.constructionMaterials},
  sewer: {type:'string', desc: desc.sewer},

  garageSpaces: {type:'number', desc: desc.garageSpaces},
  carportSpaces: {type:'number', desc: desc.carportSpaces},
  openParking: {type:'boolean', desc: desc.openParking},
  laundry: {type:'string', desc: desc.laundry},
  
  type: {type:'string', desc: desc.type},
  subtype: {type:'string', desc: desc.subtype},
  publicRemarks: {type:'string', desc: desc.publicRemarks},
  privateRemarks: {type:'string', desc: desc.privateRemarks},

  media: {
    type:'array',
    subtype: mediaSchema,
    desc: desc.media
  },
  agent: {type:'string', desc: desc.agent},
  mlsAgentID: {type:'string', desc: desc.mlsAgentID},
  office: {type:'string', desc: desc.office},
  mlsOfficeID: {type:'string', desc: desc.mlsOfficeID},
  status: {type:'string', desc: desc.status},

  taxAssessedValue: {type:'number', desc: desc.taxAssessedValue},
  taxAnnual: {type:'number', desc: desc.taxAnnual},
  taxYear: {type:'date', desc: desc.taxYear},
  taxStatus: {type:'string', desc: desc.taxStatus}
};

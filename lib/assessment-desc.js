module.exports = {
  id: 'Unique ID to identify the assessment.',
  apn: '', //TODO
  fips: 'Five digit county code ID.',
  county: 'County name.',
  state: 'Two character state abbreviation.',
  censusTract: '', //TODO

  taxID: '', //TODO
  taxAmount: '', //TODO
  taxYear: '', //TODO

  taxExemption: '', //TODO
  year: 'Assessment year.',
  landValue: 'Assessed value of land.',
  improvementValue: 'Assessed value of improvements', //TODO,
  totalValue: 'Total assessed value of land and improvements.',
  landUseGeneral: '', //TODO
  landUseCode: '', //TODO
  landUseDescription: '', //TODO
  zoningCode: '', //TODO
  zoningDescription: '', //TODO
  numberOfBuildings: 'Number of buildings.',
  lotSizeAcres: 'Size of the lot in acres.',
  lotSizeSquareFeet: 'Size of the lot in square feet.',
  lotSizeFrontage: 'Distance in feet between the front of the building and the property boundary',
  lotSizeDepth: '', //TODO
  lotSizeIrregular: '', //TODO
  lotTopography: '', //TODO

  building: 'Building details.',

  ownerName: 'Name of owner.',

  address: 'Object conatining address attributes.',

  legal: 'Legal details of the assessment.',

  coordinates: 'Latitude and longitude.'
}

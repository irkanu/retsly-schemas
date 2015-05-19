var mediaSchema = require('./media');

module.exports = {
  _id: {type:'id'},
  agentID: {type:'string'},
  firstName: {type:'string'},
  lastName: {type:'string'},
  middleName: {type:'string'},
  fullName: {type:'string'},
  cellPhone: {type:'string'},
  homePhone: {type:'string'},
  officeID: {type:'string'},
  officePhone: {type:'string'},
  officeName: {type:'string'},
  email: {type:'string'},
  title: {type:'string'},
  _office:{type:'id'},
  media: {type:'array', subtype: mediaSchema}
};
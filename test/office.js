/**
 * Dependencies
 */

var assert = require('assert');
var office = require('../lib/office.js');

var testOffice = {	id: 'identification',
  									mlsOfficeID: 'mlsOfficeID',
  									type: 'type',
  									address: 'address',
  									city: 'city',
  									fax: '6768272322',
  									email: 'email@email.com',
  									name: 'First Last',
  									phone: '1234567890',
  									state: 'washington',
  									zipCode: 'bbcjj6',
  									status: 'status'
};

/**
 * Tests
 */

suite('Office Schema')
 	test('Object Creation', function(){
 		assert('object' == typeof office, 'object exists')
 	});

 	test('Object Populate', function(){
 		office.id = testOffice.id;
 		office.mlsOfficeID = testOffice.mlsOfficeID;
 		office.type = testOffice.type;
 		office.address = testOffice.address;
 		office.city = testOffice.city;
 		office.fax = testOffice.fax;
 		office.email = testOffice.email;
 		office.name = testOffice.name;
 		office.phone = testOffice.phone;
 		office.state = testOffice.state;
 		office.zipCode = testOffice.zipCode;
 		office.status = testOffice.status;
 		//assert(office === testoffice, 'populated')
 	});

 	test('Syntax Test', function(){
 		assert('string' == typeof office.id, 'id')
  	assert('string' == typeof office.mlsOfficeID, 'mls office id')
  	assert('string' == typeof office.type, 'type')
  	assert('string' == typeof office.address, 'address') 
  	assert('string' == typeof office.city, 'city')
  	assert('string' == typeof office.fax, 'fax')
  	assert(office.fax.length === 10 || 11, 'fax length') 
  	assert('string' == typeof office.email, 'email')
  	assert('string' == typeof office.name, 'name')
  	assert('string' == typeof office.phone, 'phone')
  	assert(office.phone.length === 10 || 11, 'phone length') 
  	assert('string' == typeof office.state, 'state')
  	assert('string' == typeof office.zipCode, 'zipcode')
  	assert(office.zipCode.length === 6, 'zipcode length') 
  	assert('string' == typeof office.status, 'status')
 	});


/**
 * Dependencies
 */

var assert = require('assert');
var agent = require('../lib/agent.js');

var testAgent = { id: 'identification', 
 					  		 	mlsAgentID: 'DB2323',
 					   			firstName: 'First',
 					   			lastName: 'Last',
 					   			middleName: 'Middle',
 					 				fullName: 'First Middle Last',
 			  					title: 'Agent',
 			  					email: 'email@email.com',
 			  					cellPhone: '7789287234',
 									homePhone: '6047277272',
 									office: 'Vancouver',
 									mlsOfficeID: '123123123',
 									officePhone: '16042940000',
 									officeName: 'Office Name',
 									status: 'Status',
 									media: [] 
};  // a mock agent dataset

/**
 * Tests
 */

suite('Agent Schema')
  test('Object Creation', function(){
 		assert.doesNotThrow(function(){
 			assert('object' == typeof agent, 'object exists')
 		})
 	});

  test('Object Populate', function(){
  	// Copy over test contents to JSON template
  	agent.id = testAgent.id;
  	agent.mlsAgentID = testAgent.mlsAgentID;
  	agent.firstName = testAgent.firstName;
  	agent.lastName = testAgent.lastName;
  	agent.middleName = testAgent.middleName;
  	agent.fullName = testAgent.fullName;
  	agent.title = testAgent.title;
  	agent.email = testAgent.email;
  	agent.cellPhone = testAgent.cellPhone;
  	agent.homePhone = testAgent.homePhone;
  	agent.office = testAgent.office;
  	agent.mlsOfficeID = testAgent.mlsOfficeID;
  	agent.officePhone = testAgent.officePhone;
  	agent.officeName = testAgent.officeName;
  	agent.status = testAgent.status;
  	agent.media = testAgent.media;
  	//assert(agent === testAgent, 'populated') // find some way to check if populated object and testAgent are same (since all fields are =)
  	// Does agent = testAgent do the same, or simply replace agent with the testAgent object?
  });

  test('Syntax Test', function(){
		assert('string' == typeof agent.id, 'id')

		assert('string' == typeof agent.mlsAgentID, 'mls agent id')
		assert(agent.mlsAgentID.length === 6 || 7, 'mls id length')

		assert('string' == typeof agent.firstName, 'first name')
		assert('string' == typeof agent.lastName, 'last name')
		assert('string' == typeof agent.middleName, 'middle name')
		assert('string' == typeof agent.fullName, 'full name type')
		var full = agent.firstName+' '+agent.middleName+' '+agent.lastName;
		assert(full === agent.fullName, 'full name compare')

		assert('string' == typeof agent.title, 'title')
		assert('string' == typeof agent.email, 'email')

		assert('string' == typeof agent.cellPhone, 'cell phone')
		assert(agent.cellPhone.length === 10 || 11, 'cell phone length') 
	
		assert('string' == typeof agent.homePhone, 'home phone')
		assert(agent.homePhone.length === 10 || 11, 'home phone length')

		assert('string' == typeof agent.office, 'office')
		assert('string' == typeof agent.mlsOfficeID, 'mls office id')
		// assert(agent.mlsOfficeID.length === 9, 'mls office id length') // is there a specific MLS agent ID length?

		assert('string' == typeof agent.officePhone, 'office phone')
		assert(agent.officePhone === 10 || 11, 'office phone length')

		assert('string' == typeof agent.officeName, 'office name')
		assert('string' == typeof agent.status, 'status')
		assert('object' == typeof agent.media, 'media') // should this be an array?
 	});

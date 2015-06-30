/**
 * Dependencies
 */

var assert = require('assert');
var index = require('../index.js');
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

 suite('Index Schema')
	test('Object Creation', function(){
		assert('object' == typeof index, 'object exists')
	});

	test('Internal Objects', function(){
		index.agent.id = testAgent.id;
		assert('identification' === index.agent.id)
	});
	
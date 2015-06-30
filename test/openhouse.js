/**
 * Dependencies
 */

var assert = require('assert')
var openhouse = require('../lib/openhouse.js')

var testOpenhouse = {   id: 'identification',
                        mlsOpenhouseID: 'mlsOpenhouseID',
                        listing: 'listing',
                        mlsListingID: 'mlslistingID',
                        agent: 'Mr. Agent',
                        mlsAgentID: 'agentID',
                        date: new Date('June 30, 2015'),
                        startTime: new Date('June 30, 2015 15:30'),
                        endTime: new Date('June 30, 2015 18:30'),
                        type: 'type',
                        remarks: 'nothing',
                        status: 'status'
};

/**
 * Tests
 */

suite('Openhouse Schema')
  test('Object Creation', function(){
    assert('object' == typeof openhouse, 'object exists')
  });

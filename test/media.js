
/**
 * Dependencies
 */

var assert = require('assert');
var media = require('../lib/media.js');

var testMedia = {	id: 'identification',
									mlsMediaID: 'mlsMediaID',
									url: 'http://url@url.com',
									shortDescription: 'description for you',
									mimeType: 'image/gif',
									index: 123456
};

/**
 * Tests
 */

suite('Media Schema')
  test('Object Creation', function(){
 		assert('object' == typeof media, 'object exists')
 	});

  test('Object Populate', function(){
  	media.id = testMedia.id;
  	media.mlsMediaID = testMedia.mlsMediaID;
  	media.url = testMedia.url;
  	media.shortDescription = testMedia.shortDescription;
  	media.mimeType = testMedia.mimeType;
  	media.index = testMedia.index;
  	// assert(media === testmedia, 'populated')
  });

  test('Syntax Test', function(){
  	assert('string' == typeof media.id, 'id')
  	assert('string' == typeof media.mlsMediaID, 'mls media id')
  	assert('string' == typeof media.url, 'url')
  	assert('string' == typeof media.shortDescription, 'short description') 
  	assert('string' == typeof media.mimeType, 'mime type')
  	assert('number' == typeof media.index, 'index')
  });

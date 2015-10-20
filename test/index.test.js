var should = require('should');
var Models = require('../js/models');
var MockData = require('./mockData');
var Mock = require('muk');


// Mock for albums http request
Mock(Models, 'getAlbums', function(callback){
	// Asynchronous callback for testing
	process.nextTick(function () {
	    callback(MockData.albums);
	});
});

// Mock for users http request
Mock(Models, 'getUsers', function(userIds, callback){
	// Asynchronous callback for testing
	process.nextTick(function () {
	    callback(MockData.users);
	});
});

// Mock for photos http request
Mock(Models, 'getPhotos', function(albumIds, callback){
	// Asynchronous callback for testing
	process.nextTick(function () {
	    callback(MockData.photos);
	});
});

// React component to test UI behavior
var Albums = require('../build/views/albums');
var Album = require('../build/views/album');
var Photos = require('../build/views/photos');
var Photo = require('../build/views/photo');

var ReactTestUtils = require('react-addons-test-utils'); 
var ShallowRenderer = ReactTestUtils.createRenderer();

/**
 * BDD Test case for React UI, according to the mocking data.
 **/
describe('Albums webapp by React', function(){

	describe('Initialize albums title list', function(){

		it('Should have 4 albums in the list', function(done){

			// Get albums list with user name according to mocking data
			Models.getAlbumsWithName(function(albums){

				should(albums.length).equal(4);

				// Test each album and its photos
				for(var i = 0; i < albums.length; i++) {

					// Fix closure issue
					(function(index){

						// var albumElement = new Album();

						describe('The album with id "' + index + '"', function(){

							it("Should show the user name of this album", function(){
								should(albums[index].name).equal( MockData.users[index].name );
							});

							describe('When click this album ', function(){

								it('Should its photos will be showed', function(){
									// var dom = albumElement.refs.el;
									// ReactTestUtils.Simulate.click(dom);
								});

								describe('When click a thumbnail in photos', function(){

									it('Should show full sized photo', function(){
										
									});

								});

							});

						});

					})(i)
				}

				done();
			});
		});

	});

})
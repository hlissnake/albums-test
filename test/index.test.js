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

var Albums = require('../build/views/albums');
var Album = require('../build/views/album');
var Photos = require('../build/views/photos');
var Photo = require('../build/views/photo');

var ReactTestUtils = require('react-addons-test-utils'); 
var ShallowRenderer = ReactTestUtils.createRenderer(); console.log(ShallowRenderer);

/**
 * BDD Test case for React UI, according to the Mocking Data.
 **/
describe('albums webapp by React', function(){

	describe('show albums title list', function(){

		it('should have 4 albums in the list', function(done){

			Models.getAlbumsWithName(function(albums){

				should(albums.length).equal(4);

				for(var i = 0; i < albums.length; i++) {

					(function(index){

						var albumElement = new Album();

						describe('the album with id "' + index + '"', function(){

							it("show the user name of this album", function(){
								//
								should(albums[index].name).equal( MockData.users[index].name );
							});

							describe('When click this album ', function(){

								it('its photos will be showed', function(){
									// var dom = albumElement.refs.el;
									// ReactTestUtils.Simulate.click(dom);
								});

								describe('when click a thumbnail', function(){

									it('show full sized photo', function(){
										
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
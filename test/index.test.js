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
Mock(Models, 'getPhotos', function(albumId, callback){
	// Asynchronous callback for testing
	process.nextTick(function () {
		var result = [];
		for(var i = 0; i < MockData.photos.length; i++) {
			if(albumId == MockData.photos[i].albumId) {
				result.push(MockData.photos);
			}
		}
	    callback(result);
	});
});

/**
 * BDD Test case for React UI, according to the mocking data.
 **/
describe('Albums webapp by React', function(){

	describe('Initialize albums title list and load the mocking data', function(){

		it('Should have 4 albums in the list', function(done){

			// Get albums list with user name according to mocking data
			Models.getAlbumsWithName(function(albums){

				should(albums.length).equal(4);

				// Test each album and its photos
				for(var i = 0; i < albums.length; i++) {

					// Fix closure issue
					(function(index){

						describe('The album with id "' + index + '"', function(){

							it("Should show the user name of this album", function(){
								should(albums[index].name).equal( MockData.users[index].name );
							});

							describe('When click this album ', function(){

								it('Should its photos will be showed, with 2 photo items in the list', function(done){
									// var dom = albumElement.refs.el;
									// ReactTestUtils.Simulate.click(dom);
									Models.getPhotos(albums[index].id, function(photos){
										should(photos.length).equal( 2 );
										done();
									});
								});

								describe('When click a thumbnail in photos (changing into jest test practicular for React UI)', function(){

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
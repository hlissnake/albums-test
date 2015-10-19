var should = require('should');

describe('albums app', function(){

	describe('show albums list', function(){

		it('should have 100 albums in the list', function(){

			for(var i = 0; i < 4; i++) {

				describe('the album with id "' + i + '"', function(){

					it("show the user name of this album", function(){

					});

					describe('When click this album ', function(){

						it('its photos will be showed', function(){

						});

						describe('when click a thumbnail', function(){

							it('show full sized photo', function(){

							});

						});

					});

				});
			}
		})

	});

})
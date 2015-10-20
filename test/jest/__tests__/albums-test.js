jest.dontMock('../../../js/views/albums.js');

describe('albums component', function() {
    
    var TestUtils = require('react-addons-test-utils');
    var ReactDOM = require('react-dom');
    var React = require('react');
    var Albums = require('../../../js/views/albums.js');

    var MockingData = [
		{
			"userId": 1,
			"id": 1,
			"title": "quidem molestiae enim"
		},
		{
			"userId": 2,
			"id": 2,
			"title": "sunt qui excepturi placeat culpa"
		},
		{
			"userId": 3,
			"id": 3,
			"title": "omnis laborum odio"
		},
		{
			"userId": 4,
			"id": 4,
			"title": "non esse culpa molestiae omnis sed optio"
		}
	];

    // Render a checkbox with label in the document
    var albums = TestUtils.renderIntoDocument(
    	<Albums list={MockingData} />
    );

    // Album items in Albums component
    var albumItems = TestUtils.scryRenderedDOMComponentsWithClass(
      albums, 'album-item');

  	it('should display albums list information correctly', function() {
    	// Verify that albums list has correct number as the mocking data
	    expect(albumItems.length).toEqual( 4 );

	});

  	it('should display photos list after click one album', function() {

	    TestUtils.Simulate.click( albumItems[0] );

	    // albums asyn callback of photos loading
	    albums.test_callback = function(){
	    	var photoItems = TestUtils.scryRenderedDOMComponentsWithClass(
      			albums, 'photo-item');

	    	expect( photoItems.length > 0 ).toEqual( true );
	    }
	});

  	it('should show selected class after click another album', function() {

	    TestUtils.Simulate.click( albumItems[1] );

	    expect( ReactDOM.findDOMNode(albumItems[1]).className.indexOf('selected') > -1 ).toEqual( true );

	});

});
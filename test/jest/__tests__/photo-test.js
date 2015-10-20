jest.dontMock('../../../js/views/photo.js');

describe('photo component', function() {
    
    var TestUtils = require('react-addons-test-utils');
    var ReactDOM = require('react-dom');
    var React = require('react');
    var Photo = require('../../../js/views/photo.js');

    var MockingData = {
	    "albumId": 1,
	    "id": 1,
	    "title": "accusamus beatae ad facilis cum similique qui sunt",
	    "url": "http://placehold.it/600/92c952",
	    "thumbnailUrl": "http://placehold.it/150/30ac17"
	};

    // Render a checkbox with label in the document
    var photo = TestUtils.renderIntoDocument(
    	<Photo photo={MockingData} />
    );

  	it('should display photo information correctly', function() {
    // Verify that it's url is correct
	    var thumbnail = TestUtils.findRenderedDOMComponentWithClass(
	      photo, 'thumbnail');

	    expect(ReactDOM.findDOMNode(thumbnail).src).toEqual(MockingData.thumbnailUrl);

	});

  	it('should display full size photo after click', function() {
	    // Simulate a click and verify that if full size image is load
	    var fullSize = TestUtils.findRenderedDOMComponentWithClass(
	      photo, 'full-size');


	    // add mocking callback function in component to handler asynchonorous event
	    photo.test_callback = function(){
	    	
	    	expect(ReactDOM.findDOMNode(fullSize).src).toEqual(MockingData.url);
	    }

	    TestUtils.Simulate.click(thumbnail);

	});

});
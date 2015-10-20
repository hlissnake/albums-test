
var React = require('react');
var Photo = require('./photo');

var Photos = React.createClass({displayName: "Photos",

	getInitialState : function(){
		return {
			'photos' : []
		}
	},

	render : function(){

		return (
			React.createElement("div", {className: "photo-list"}, 
			
				this.props.photos.map(function(photo, i){
					return (
						React.createElement(Photo, {photo: photo, key: i})
					)
				}), 
			
				React.createElement("div", {className: "loading-icon " + (this.props.loading ? 'show' : 'hide') })
			)
		)
	}
})

module.exports = Photos;
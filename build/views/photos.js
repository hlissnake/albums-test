
var React = require('react');
var Photo = require('./photo');

var Photos = React.createClass({displayName: "Photos",

	getInitialState : function(){
		return {
			'photos' : []
		}
	},

	// componentWillReceiveProps : function(){
	// 	var me = this;
	// 	if(this.props.albumId) {
	// 		Models.getPhotos(this.props.albumId, function(photos){
	// 			me.setState({
	// 				'photos' : photos
	// 			})
	// 		});
	// 	}
	// },

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
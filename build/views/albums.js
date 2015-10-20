
var React = require('react');
var Album = require('./album');
var Photos = require('./photos');
var Models = require('../models');

var Albums = React.createClass({displayName: "Albums",

	getInitialState : function(){
		return {
			photos : [],
			loading : false
		};
	},

	/**
	 * Click the album
	 **/
	showPhoto : function(albumId){

		this.setState({
			'photos' : [],
			'loading' : true
		})

		// Load photos data and transfer to Photos component
		Models.getPhotos(albumId, function(photos){
			this.setState({
				'photos' : photos,
				'loading' : false
			})
		}.bind(this));
	},

	render : function(){

		return (
			React.createElement("div", {className: "albums clearfix"}, 
				React.createElement("h3", null, "Albums List:"), 
				React.createElement("div", {className: "album-list"}, 
				
					this.props.list.map(function(album, i){
						return (
							React.createElement(Album, {album: album, onAlbumClick: this.showPhoto, key: i})
						)
					}.bind(this))
				
				), 
				React.createElement(Photos, {photos: this.state.photos, loading: this.state.loading})
			)
		)
	}
})

module.exports = Albums;
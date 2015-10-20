
var React = require('react');
var Album = require('./album');
var Photos = require('./photos');
var Models = require('../models');

var Albums = React.createClass({

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

		this.selectAlbumId = albumId
		this.setState({
			'photos' : [],
			'loading' : true
		})

		// Load photos data and transfer to Photos component
		Models.getPhotos(albumId, function(photos){
			this.setState({
				'photos' : photos,
				'loading' : false
			});
			// for testing the inner event callback
			this.test_callback && this.test_callback();
		}.bind(this));
	},

	render : function(){

		return (
			<div className="albums clearfix">
				<h3>Albums List:</h3>
				<div className="album-list">
				{
					this.props.list.map(function(album, i){
						return (
							<Album 
								album={album} 
								selected={ album.id == this.selectAlbumId ? true : false } 
								onAlbumClick={this.showPhoto} 
								key={i} />
						)
					}.bind(this))
				}
				</div>
				<Photos photos={this.state.photos} loading={this.state.loading}/>
			</div>
		)
	}
})

module.exports = Albums;
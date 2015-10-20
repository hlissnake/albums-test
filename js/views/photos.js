
var React = require('react');
var Photo = require('./photo');

var Photos = React.createClass({

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
			<div className="photo-list">
			{
				this.props.photos.map(function(photo, i){
					return (
						<Photo photo={photo} key={i}/>
					)
				})
			}
				<div className={"loading-icon " + (this.props.loading ? 'show' : 'hide') }></div>
			</div>
		)
	}
})

module.exports = Photos;
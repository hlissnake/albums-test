
var React = require('react');
var Photo = require('./photo');

var Photos = React.createClass({

	getInitialState : function(){
		return {
			'photos' : []
		}
	},

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
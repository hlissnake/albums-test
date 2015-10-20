
var React = require('react');

var Photo = React.createClass({

	/**
	 * on click the thumbnail, load the full size image
	 **/
	onClick : function(){
		var img = this.refs.fullsize;
		img.onload = function(){
			img.classList.remove('hidden');
			this.test_callback && this.test_callback();
		}
		img.src = this.props.photo.url;
	},

	/**
	 * on click the full size image, hide it again
	 **/
	hide : function(){
		var img = this.refs.fullSize;
		img.classList.add('hidden');
	},

	render : function(){

		return (
			<div className="photo-item">
				<span>{this.props.photo.title}</span>

				<img className="thumbnail"
					onClick={this.onClick} 
					src={this.props.photo.thumbnailUrl}/>

				<img ref="fullsize" 
					className="full-size hidden" 
					onClick={this.hide}/>
			</div>
		)
	}
})

module.exports = Photo;
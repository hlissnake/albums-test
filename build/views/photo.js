
var React = require('react');

var Photo = React.createClass({displayName: "Photo",

	/**
	 * on click the thumbnail, load the full size image
	 **/
	onClick : function(){
		var img = this.refs.fullSize;
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
			React.createElement("div", {className: "photo-item"}, 
				React.createElement("span", null, this.props.photo.title), 

				React.createElement("img", {className: "thumbnail", 
					onClick: this.onClick, 
					src: this.props.photo.thumbnailUrl}), 

				React.createElement("img", {ref: "fullSize", 
					className: "full-size hidden", 
					onClick: this.hide})
			)
		)
	}
})

module.exports = Photo;
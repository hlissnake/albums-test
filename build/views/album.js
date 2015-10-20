
var React = require('react');

var Album = React.createClass({displayName: "Album",

	onClick : function(){
		this.props.onAlbumClick(this.props.album.id);
	},

	shouldComponentUpdate : function(){
		return false;
	},

	render : function(){
		return (
			React.createElement("div", {className: "album-item", onClick: this.onClick}, 
				React.createElement("span", {className: "album-item-title"}, this.props.album.title), 
				React.createElement("span", {className: "album-item-name"}, "User: ", this.props.album.name)
			)
		)
	}
})

module.exports = Album;
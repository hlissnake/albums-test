
var React = require('react');

var Album = React.createClass({

	onClick : function(){
		this.props.onAlbumClick(this.props.album.id);
	},

	shouldComponentUpdate : function(){
		return false;
	},

	render : function(){
		return (
			<div className="album-item" onClick={this.onClick}>
				<span className="album-item-title">{this.props.album.title}</span>
				<span className="album-item-name">User: {this.props.album.name}</span>
			</div>
		)
	}
})

module.exports = Album;
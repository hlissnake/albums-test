
var React = require('react');

var Album = React.createClass({

	onClick : function(){
		this.props.onAlbumClick(this.props.album.id);
	},

	shouldComponentUpdate : function(nextProps){
		return this.props.selected != nextProps.selected;
	},

	render : function(){
		return (
			<div className={"album-item" + (this.props.selected ? ' selected' : '' ) } onClick={this.onClick}>
				<span className="album-item-title">{this.props.album.title}</span>
				<span className="album-item-name">User: {this.props.album.name}</span>
			</div>
		)
	}
})

module.exports = Album;
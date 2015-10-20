
var React = require('react');
var ReactDOM = require('react-dom');
var Albums = require('./views/albums');
var Models = require('./models')

var Container = React.createClass({displayName: "Container",

	getInitialState : function(){
		return {
			albums : []
		}
	},

	componentDidMount : function(){
		var me = this;
		Models.getAlbumsWithName(function(albums){
			me.setState({
				albums : albums
			});
		});
	},

	render : function(){
		return (
			React.createElement("div", {className: "albums-container"}, 
				React.createElement("div", {className: "loading-icon " + (this.state.albums.length ? 'hide' : 'show') }), 
				React.createElement(Albums, {list: this.state.albums})
			)
		)
	}
})

ReactDOM.render(
	React.createElement(Container, null), document.getElementById('container')
);

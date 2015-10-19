
var React = require('react');
var Albums = require('./views/albums');
var Models = require('./models')

var Container = React.createClass({displayName: "Container",

	getInitialState : function(){
		return {
			albums : []
		}
	},

	componentDidMount : function(){
		Models.getAlbums(function(albums){
			var userids = [];
			for(var i = 0; i < albums.length; i++) {

			}
			Models.getUser(userids, function(users){
				this.setState({
					albums : users
				})
			});
		});
	},

	render : function(){
		return (
			React.createElement("div", null, 
				React.createElement(Albums, {list: this.state.albums}), ","
			)
		)
	}
})

React.render(
	document.getElementById('container')
);

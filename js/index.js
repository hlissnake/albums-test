
var React = require('react');
var Albums = require('./views/albums');
var Models = require('./models')

var Container = React.createClass({

	getInitialState : function(){
		return {
			albums : []
		}
	},

	componentDidMount : function(){
		Models.getAlbumsWithName(function(albums){
			this.setState({
				albums : albums
			});
		});
	},

	render : function(){
		return (
			<div>
				<Albums list={this.state.albums}></Albums>,
			</div>
		)
	}
})

React.render(
	<Container />
	document.getElementById('container')
);

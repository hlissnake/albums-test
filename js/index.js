
var React = require('react');
var ReactDOM = require('react-dom');
var Albums = require('./views/albums');
var Models = require('./models')

var Container = React.createClass({

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
			<div className="albums-container">
				<div className={"loading-icon " + (this.state.albums.length ? 'hide' : 'show') }></div>
				<Albums list={this.state.albums}></Albums>
			</div>
		)
	}
})

ReactDOM.render(
	<Container />, document.getElementById('container')
);

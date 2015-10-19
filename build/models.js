var io = require('ajax');

var root = 'http://jsonplaceholder.typicode.com';

module.exports = {
	
	getAlbums : function(callback){
		io.get( root + '/albums', [], function(data){
			callback(data);
		});
	},

	getUsers : function(userIds, callback){
		for(var i = 0; i < userIds.length; i++) {
			userIds[i] = 'id=' + userIds[i];
		}
		io.get( root + '/users?' + userIds.join('&'), [], function(data){
			callback(data);
		});
	},

	getPhotos : function(albumIds, callback){
		for(var i = 0; i < albumIds.length; i++) {
			albumIds[i] = 'albumId=' + albumIds[i];
		}
		io.get( root + '/photos?' + albumIds.join('&'), [], function(data){
			callback(data);
		});
	}

}
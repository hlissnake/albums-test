var io = require('ajax');

var root = 'http://jsonplaceholder.typicode.com';

module.exports = {

	/**
	 * fetch the data from two http request, 
	 * to generate albums data with its own user's name
	 **/
	getAlbumsWithName : function(callback){
		var me = this,
			userIds = [],
			userMap = {};

		this.getAlbums(function(albums){
			for(var i = 0; i < albums.length; i++) {
				var userId = albums[i].userId;
				if( !userMap[userId] ) {
					userMap[userId] = true;
					userIds.push(userId);
				}
			}

			me.getUsers(userIds, function(users){
				for(var i = 0; i < albums.length; i++) {
					var album = albums[i];
					
					for(var j = 0; j < users.length; j++) {
						if(users[j].id == album.userId) {
							album.name = users[j].name;
						}
					}
				}

				callback(albums);
			});
		});
	},
	
	getAlbums : function(callback){
		io.get( root + '/albums', [], function(albums){
			callback(albums);
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

	getPhotos : function(albumId, callback){
		io.get( root + '/photos?albumId=' + albumId, { }, function(data){
			callback(data);
		});
	}

}
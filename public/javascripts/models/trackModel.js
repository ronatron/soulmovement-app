var app = app || {};

App.Models.Track = Backbone.Model.extend({
	validate: function () {
		if ( ! $.trim(attrs) ) {
			return 'A Track requires a valid title.';
		}
	},
	initialize: function () {
		var self = this;
	}
});

App.Collections.Tracks = Backbone.Collection.extend({
	model: App.Models.Track
});


//Build out index.jade
//soundcloud basic playlist 
//views main, playlist & blog
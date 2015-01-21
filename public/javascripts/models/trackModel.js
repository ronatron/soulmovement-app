var app = app || {};

App.Models.Track = Backbone.Model.extend();

App.Collections.extend({
	model: App.Models.Track,
	url: 'http://api.soundcloud.com/tracks'
});
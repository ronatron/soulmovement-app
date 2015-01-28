var app = app || {};

App.Views.Tracks = Backbone.View.extend({
	tagName: 'ul',
	className: 'space-list',
	initialize: function () {
		_.bindAll(this, 'render');
		var self = this;
		SC.get('playlists/73421925', function(playlist) {
			for (var i = 0; i < playlist.tracks.length; i++) {
			console.log(playlist.tracks[i].length);
		}
	});
		self.collection.on('sync', this.render, this);
		self.render();
	},

	render: function () {
		this.collection.each(this.addOne, this);
		return this;
	},

	addOne: function(track) {
		var trackView = new App.Views.Track({ model: track });
		this.$el.append(trackView.render().el);
	}
});

var app = app || {};

App.Views.Track = Backbone.View.extend({
	tagname: 'li',

	template: _.template( $( 'trackTemplate' ).html()),
	
	render: function() {
		this.$el.html( this.template ( this.model.attributes) );
		return this;
	}
});

var tracks = new App.Collections.Tracks();
tracks.fetch({
  data: {
    format: 'json',
    client_id: '18f21a46f92cbfd743485542ac5f7227',
    genres: 'dnb',
    order: 'hotness',
    limit: '5'
  }
});

var app = new App.Views.Tracks({
  collection: tracks
});

$('.tracks').html(app.render().el);
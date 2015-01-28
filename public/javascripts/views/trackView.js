var app = app || {};

SC.initialize({
	client_id: 'c0118464034c2e20de2a2e7875718321'
});

App.Views.Track = Backbone.View.extend({
	tagname: 'li',
	className: 'space-list-item',
	template: _.template( $( 'trackTemplate' ).html()),

	initialize: function () {

	},
	
	render: function() {
		this.$el.html( this.template ( this.model.attributes) );
		return this;
	}
});

var trackCollection = new App.Collections.Tracks();
	soundc.app = app = new App.Views.Tracks({collection: trackCollection});
	$('.tracks').html(app.render().el);




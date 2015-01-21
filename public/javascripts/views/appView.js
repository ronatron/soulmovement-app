var app = app || {};

// app.AppView = Backbone.View.extend({
// 	tagName: 'div',
// 	template: _.template( $('#smModel').html() ),
// 	events: {},
// 	initialize: function() {
// 		this.listenTo(app.login, 'authenticated', redirect);
// 	},
// 	render: function() {
// 		this.$el.html( this.template(
// 			this.model.toJSON()
// 		));
// 		return this;
// 	}

// });

App.Views.Tracks = Backbone.View.extend({
	
	tagName: 'ol',
	
	initialize: function() {
		this.collection.on('sync', this.render, this);
	},

	render: function() {
		this.$el.empty();
		console.log('collection: ', this.collection);
		this.collection.each(this.addOne, this);
		return this;
	},

	addOne: function(track) {
		console.log('model: ', track);
		var trackView = new App.Views.Track({
			model: track
		});
		this.$el.append(trackView.render().el);
	}
});
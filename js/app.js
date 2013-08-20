(function() {
	"use strict";

	window.App = Ember.Application.create();

	window.App.Router.map(function () {
		this.resource('album', {
			path: '/album/:album_id'
		});
	});

	window.App.IndexRoute = Ember.Route.extend({
		model: function () {
			return App.ALBUM_FIXTURES;
		}
	});

	window.App.AlbumRoute = Ember.Route.extend({
		model: function (params) {
			return App.ALBUM_FIXTURES.findProperty('id', params.album_id);
		}
	});

	Ember.Handlebars.helper('format-duration', function(value, options) {
		var seconds = parseInt(value, 10);
		var minutes = Math.floor(seconds/60);

		seconds = seconds - (minutes * 60);

		var prettyTime = minutes + ':';

		if (seconds < 10) {
			prettyTime = prettyTime + '0';
		}

		prettyTime = prettyTime + seconds;

		return prettyTime;
	});
})();

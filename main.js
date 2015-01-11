var View =  function (name) {
	return Backbone.View.extend({
	    initialize: function(){
	        this.render();
	    },
	    render: function(){
	        var template = _.template( $('#'+name+'_temp').html(), {} );
	        this.$el.html( template );
	    }
	});
}

$(function() {

	var Router = Backbone.Router.extend({
		routes : {
			'': 'displayWho',
			'who': 'displayWho',
			'what': 'displayWhat',
			'how': 'displayHow'
		}
	});

	var  router = new Router;

	var display = function (page) {
		return function () {
			var view = View(page);
			$('.active').removeClass('active');
			$('#' + page + 'link').addClass('active');
			return new view ({el: $('#maincontent') });
		}
	};

	router.on('route:displayWho', display('who'));
	router.on('route:displayWhat', display('what'));
	router.on('route:displayHow', display('how'));

	Backbone.history.start();
})


define(['ember'], function(Ember) {

  var Router = Ember.Router.extend({
    location: 'history'
  });

  Router.map(function() {
    this.route('browser');
  });

  return Router;
});
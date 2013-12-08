/**
  Ember application routes.
*/
define(['ember'], function(Ember) {

  // Use the history API instead of relying on hashchange
  var Router = Ember.Router.extend({
    location: 'history'
  });

  Router.map(function() {
    this.resource('browser', { path: '/repos' }, function() {
      this.resource('repositories', { path: ':name' });
    });
  });

  return Router;
});
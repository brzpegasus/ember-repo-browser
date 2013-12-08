define(['ember'], function(Ember) {

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
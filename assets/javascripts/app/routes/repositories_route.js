define(['ember', 'app/models/repository'], function(Ember, Repository) {

  var RepositoriesRoute = Ember.Route.extend({

    model: function(params) {
      return Repository.findAll(params.name);
    },

    serialize: function(model) {
      return { name: this.controllerFor('browser').get('searchTerm') };
    },

    setupController: function(controller, model) {
      controller.set('model', model);
    }
  });

  return RepositoriesRoute;
});
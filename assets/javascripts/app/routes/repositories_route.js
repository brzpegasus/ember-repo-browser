/**
  Repositories Route.

  This route passes an array of Repository records to the repositories
  controller to display in a list.
*/
define([
  'ember',
  'app/models/repository'
], function(Ember, Repository) {

  var RepositoriesRoute = Ember.Route.extend({
    /**
      The model hook ensures that when users hit the URL '/repos/:name',
      the records corresponding to that name are fetched. Note that this
      hook doesn't get called when transitioning into this route from
      somewhere else within the app since the model would then already be
      set with the `transitionToRoute()` call.
    */
    model: function(params) {
      return Repository.findAll(params.name);
    },

    /**
      When transitioning into this route from within the app, as opposed to
      by hitting the URL directly, the `:name` param wouldn't necessarily be
      set in the `/repos/:name` URL, so we need to get the value from the
      browser controller.
    */
    serialize: function(model) {
      return { name: this.controllerFor('browser').get('searchTerm') };
    },

    setupController: function(controller, model) {
      controller.set('model', model);
    }
  });

  return RepositoriesRoute;
});
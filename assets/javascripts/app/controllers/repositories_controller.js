/**
  Repositories Controller.

  This is just a simple proxy for all Repository records given
  by the repositories route. Nothing fancy... yet.
*/
import Ember from 'ember';

var RepositoriesController = Ember.ArrayController.extend({
  // Add filtering/sorting and such here
});

export default RepositoriesController;

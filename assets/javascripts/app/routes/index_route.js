/**
  Application Index Route.

  All we're doing here for now is redirect all requests for `/`
  to the `browser` resource (`/repos`) so users can start searching for repos.
*/
import Ember from 'ember';

export default Ember.Route.extend({
  redirect: function() {
    this.transitionTo('browser');
  }
});

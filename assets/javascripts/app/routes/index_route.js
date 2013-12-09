/**
  Application Index Route.

  All we're doing here for now is redirect all requests for `/`
  to the `browser` resource (`/repos`) so users can start searching for repos.
*/
import Ember from 'ember';

var IndexRoute = Ember.Route.extend({
  redirect: function() {
    this.transitionTo('browser');
  }
});

export default IndexRoute;

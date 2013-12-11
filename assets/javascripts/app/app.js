/**
  GitHub Repo Browser Application.
*/
import Ember from 'ember';
import Router from 'app/router';
import Resolver from 'app/resolver';

// Log all the things!
var App = Ember.Application.extend({
  LOG_ACTIVE_GENERATION: true,
  LOG_MODULE_RESOLVER: true,
  LOG_TRANSITIONS: true,
  LOG_TRANSITIONS_INTERNAL: true,
  LOG_VIEW_LOOKUPS: true,
  Router: Router,
  Resolver: Resolver,
  modulePrefix: 'app'
});

export default App;

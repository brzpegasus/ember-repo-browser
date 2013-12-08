define([
  'ember',
  'app/resolver',
  'app/router',
  'app/routes/index_route',
  'app/routes/repositories_route',
  'app/controllers/browser_controller',
  'app/controllers/repositories_controller',
  'app/components/search_field_component'
], function(Ember, Resolver, Router) {

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

  return App;
});
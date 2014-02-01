/*
  RequireJS configuration.
*/
requirejs.config({
  urlArgs: 'b=' + ((new Date()).getTime()),
  shim: {
    ember: {
      deps: ['handlebars', 'jquery'],
      exports: 'Ember'
    }
  },
  paths: {
    jquery: 'vendor/jquery',
    handlebars: 'vendor/handlebars',
    ember: 'vendor/ember'
  }
});

/*
  Application entry point.
*/
require(['app/app'], function(App) {
  // Create an instance of the Ember app and expose it globally, mostly because
  // it's convenient at runtime for looking things up through the console, e.g.:
  // `App.__container__.lookup('model:foo')`
  window.App = App.create();
});
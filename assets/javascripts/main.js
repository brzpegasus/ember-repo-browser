requirejs.config({
  urlArgs: 'b=' + ((new Date()).getTime()),
  shim: {
    'ember': {
      deps: ['handlebars', 'jquery'],
      exports: 'Ember'
    }
  },
  paths: {
    'jquery': 'vendor/jquery',
    'handlebars': 'vendor/handlebars',
    'ember': 'vendor/ember'
  }
});

require(['app/app'], function(App) {
  App.create();
});
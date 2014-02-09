requirejs.config({
  urlArgs: 'b=' + ((new Date()).getTime()),
  shim: {
    ember: {
      deps: ['handlebars', 'jquery'],
      exports: 'Ember'
    },
    adapter: {
      deps: ['ember']
    }
  },
  paths: {
    jquery: 'vendor/jquery',
    handlebars: 'vendor/handlebars',
    ember: 'vendor/ember',
    adapter: 'vendor/adapter'
  }
});

require(['jquery', 'tests'], function($) {
  // Ember app initializers only run when the DOM is ready,
  // so don't start mocha too soon.
  $(document).ready(function() {
    mocha.run();
  });
});
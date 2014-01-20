requirejs.config({
  urlArgs: 'b=' + ((new Date()).getTime()),
  shim: {
    handlebars: {
      exports: 'Handlebars',
      init: function() {
        // Expose Handlebars globally for r.js optimizer
        // (https://github.com/wycats/handlebars.js/issues/333)
        window.Handlebars = Handlebars;
      }
    },
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

require(['jquery', 'tests', 'tests/app'], function($) {
  should = chai.should();

  // Ember app initializers only run when the DOM is ready,
  // so don't start mocha too soon.
  $(document).ready(function() {
    mocha.run();
  });
});

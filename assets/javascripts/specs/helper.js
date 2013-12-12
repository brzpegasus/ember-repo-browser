import $ from 'jquery';
import Ember from 'ember';
import App from 'app/app';

// For integration testing, the app needs to run within the test framework
$('body').append('<div id="ember-testing"></div>');

// TODO Consider injecting Ember's test helpers + mocha adapter?

var helper = {
  /**
    Create a new instance of `App`, but configure it for testing.
  */
  createApp: function() {
    var testApp;
    Ember.run(function() {
      testApp = App.create({
        rootElement: '#ember-testing',
        LOG_ACTIVE_GENERATION: false,
        LOG_VIEW_LOOKUPS: false
      });

      // Defer the app readiness so the app can be started only when the tests
      // are ready to run. The router's location will also be set to `none` to
      // prevent the window's location from changing.
      testApp.setupForTesting();
    });
    return testApp;
  }
};

export default helper;

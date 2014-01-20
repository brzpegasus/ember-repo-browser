import Ember from 'ember';
import Adapter from 'adapter';
import Application from 'app/app';

Ember.Test.adapter = Ember.Test.MochaAdapter.create();

var App = Application.create({
  rootElement: '#ember-testing',
  LOG_ACTIVE_GENERATION: false,
  LOG_MODULE_RESOLVER: false,
  LOG_TRANSITIONS: false,
  LOG_TRANSITIONS_INTERNAL: false,
  LOG_VIEW_LOOKUPS: false
});

App.setupForTesting();
App.injectTestHelpers();

export default App;

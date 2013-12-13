import Ember from 'ember';
import helper from 'specs/helper';

describe("Ember's custom resolver", function() {
  var app, locator;

  before(function() {
    app = helper.createApp();
    locator = app.__container__;
  });

  after(function() {
    Ember.run(app, 'destroy');
  });

  it("can look up top-level templates", function() {
    should.exist(locator.lookup('template:application'));
  });

  it("can look up nested templates", function() {
    should.exist(locator.lookup('template:browser.index'));
  });

  it("can look up component templates", function() {
    should.exist(locator.lookup('template:components/search-field'));
    should.exist(locator.lookup('template:components.search-field'));
  });

  it("can look up top-level controllers", function() {
    should.exist(locator.lookup('controller:browser'));
  });

  it("can look up component controllers", function() {
    should.exist(locator.lookup('component:search-field'));
    should.exist(locator.lookup('component:search_field'));
    should.exist(locator.lookup('component:searchField'));
  });

  it("can look up top-level routes", function() {
    should.exist(locator.lookup('route:index'));
  });
});

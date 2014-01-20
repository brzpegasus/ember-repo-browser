import Ember from 'ember';
import App from 'tests/app';

describe("When the application loads", function() {

  beforeEach(function() {
    App.reset();
  });

  it("the header 'Repository Browser' should display", function() {
    visit('/');
    andThen(function() {
      find('h1:contains("Repository Browser")').should.have.length(1);
    });
  });
});

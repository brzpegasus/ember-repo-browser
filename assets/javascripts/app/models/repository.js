/**
  Repository Model.

  This represents a single GitHub repo.
*/
define([
  'ember',
  'jquery'
], function(Ember, $) {

  // Just a plain old Ember.Object since we're not using Ember Data
  var Repository = Ember.Object.extend({});

  // Define some `find*` functions on the constructor so we can
  // call those directly on the class, e.g. `Repository.findAll()`.
  Repository.reopenClass({
    /**
      Finds all Repository records for which the repo name matches
      the given `name` argument.
    */
    findAll: function(name) {
      var url = 'https://api.github.com/search/repositories',
          data = { 'q': name + '+in:name' };

      return $.getJSON(url, data).then(function(response) {
        var records = response.items.map(function(item) {
          return Repository.create(item);
        });
        return records;
      });
    }
  });

  return Repository;
});
define(['ember', 'jquery'], function(Ember, $) {
  
  var Repository = Ember.Object.extend({});

  Repository.reopenClass({

    findAll: function(name) {
      var results = $.getJSON(
          'https://api.github.com/search/repositories',
          { 'q': name + '+in:name' })
        .then(function(response) {
          var records = response.items.map(function(item) {
            return Repository.create(item);
          });
          return records;
        });

      return results;
    }
  });

  return Repository;
});
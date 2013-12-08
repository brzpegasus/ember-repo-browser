/**
  Search Field Component.

  A simple search input field and submit button.
*/
define(['ember'], function(Ember) {

  var SearchFieldComponent = Ember.Component.extend({
    tagName: 'form',
    classNames: ['navbar-form'],

    didInsertElement: function() {
      this.$('input').focus();
    },

    actions: {
      submit: function() {
        var value = this.get('value');
        if (value) {
          this.sendAction('submit', value);
          this.$('input').blur();
        }
      }
    }
  });

  return SearchFieldComponent;
});

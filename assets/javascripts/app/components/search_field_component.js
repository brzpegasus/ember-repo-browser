/**
  Search Field Component.

  A simple search input field and submit button.
*/
import Ember from 'ember';

export default Ember.Component.extend({
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

/**
  Browser Controller.

  This is a simple ObjectController that handles searching for specific repos.
*/
import Ember from 'ember';
import Repository from 'app/models/repository';

var BrowserController = Ember.ObjectController.extend({
  searchTerm: '',

  actions: {
    searchRepos: function(name) {
      this.set('searchTerm', name);
      this.transitionToRoute('repositories', Repository.findAll(name));
    }
  }
});

export default BrowserController;

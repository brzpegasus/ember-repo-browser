/**
  GitHub Repo Browser Application.
*/
import Ember from 'ember';
import templates from 'templates';

import Router from 'app/router';
import SearchFieldComponent from 'app/components/search_field_component';
import BrowserController from 'app/controllers/browser_controller';
import RepositoriesController from 'app/controllers/repositories_controller';
import Repository from 'app/models/repository';
import IndexRoute from 'app/routes/index_route';
import RepositoriesRoute from 'app/routes/repositories_route';

// Log all the things!
var App = Ember.Application.extend({
  LOG_ACTIVE_GENERATION: true,
  LOG_MODULE_RESOLVER: true,
  LOG_TRANSITIONS: true,
  LOG_TRANSITIONS_INTERNAL: true,
  LOG_VIEW_LOOKUPS: true,
  Router: Router,
  SearchFieldComponent: SearchFieldComponent,
  BrowserController: BrowserController,
  RepositoriesController: RepositoriesController,
  Repository: Repository,
  IndexRoute: IndexRoute,
  RepositoriesRoute: RepositoriesRoute
});

export default App;

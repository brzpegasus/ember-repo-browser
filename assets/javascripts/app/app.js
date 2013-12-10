/**
  GitHub Repo Browser Application.
*/
import Ember from 'ember';
import Router from 'app/router';
import Resolver from 'app/resolver';

/* Components */
import SearchFieldComponent from 'app/components/search_field_component';

/* Routes */
import IndexRoute from 'app/routes/index_route';
import RepositoriesRoute from 'app/routes/repositories_route';

/* Controllers */
import BrowserController from 'app/controllers/browser_controller';
import RepositoriesController from 'app/controllers/repositories_controller';

/* Models */
import Repository from 'app/models/repository';

// Log all the things!
var App = Ember.Application.extend({
  LOG_ACTIVE_GENERATION: true,
  LOG_MODULE_RESOLVER: true,
  LOG_TRANSITIONS: true,
  LOG_TRANSITIONS_INTERNAL: true,
  LOG_VIEW_LOOKUPS: true,
  Router: Router,
  Resolver: Resolver,
  modulePrefix: 'app'
});

export default App;

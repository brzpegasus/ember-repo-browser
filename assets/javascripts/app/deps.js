/**
  Application dependencies. These need to be loaded up front so when
  Ember's resolver requires modules, they can be fetched synchronously.
 
  Typically, the order in which these are listed shouldn't matter.
  In cases where a module does depend on another (e.g. a controller needing
  a mixin to be defined first, or a route needing a specific model), those
  would be declared within the individual modules themselves.
*/
define(function() {  
  return [
    /* Components */
    'app/components/search_field_component',

    /* Routes */
    'app/routes/index_route',
    'app/routes/repositories_route',

    /* Controllers */
    'app/controllers/browser_controller',
    'app/controllers/repositories_controller',

    /* Models */
    'app/models/repository'
  ];
});
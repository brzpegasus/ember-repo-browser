/**
  An extension of Ember's DefaultResolver. This will attempt to go through
  the default mechanism first to resolve objects (i.e. Ember.TEMPLATES for templates
  and the Application namespace for everything else), and then through the given
  templates hash and AMD module registry.

  When those are missing, Ember will generate its own controllers, routes, views, etc.
*/
define([
  'ember',
  'templates',
  'app/deps'
], function(Ember, templates, deps) {

  var get = Ember.get,
      decamelize = Ember.String.decamelize,
      classify = Ember.String.classify;

  var Resolver = Ember.DefaultResolver.extend({

    /**
      Look up the template in Ember.TEMPLATES (the default). If not found there, look in
      the 'templates' dependency object instead.
    */
    resolveTemplate: function(parsedName) {
      var resolvedTemplate = this._super(parsedName);
      if (!resolvedTemplate) {
        resolvedTemplate = templates[parsedName.fullNameWithoutType];
      }
      return resolvedTemplate;
    },

    /**
      Convert the string name of the form "type:name" to an object with the
      parsed aspects of the name broken out.
    */
    parseName: function(fullName) {
      var parsedName = this._super(fullName);
      // By Ember's convention, models don't have a "model" suffix
      if (parsedName.type === 'model') {
        parsedName.suffix = '';
      } else {
        parsedName.suffix = parsedName.type;
      }
      return parsedName;
    },

    /**
      Look up the factory object specified by parsedName in the list of
      loaded AMD modules (via require).
    */
    resolveOther: function(parsedName) {
      var moduleName,
          modulePrefix = this.namespace.modulePrefix ? this.namespace.modulePrefix + '/' : '',
          className = classify(parsedName.name) + classify(parsedName.suffix),
          factory = get(parsedName.root, className);

      if (!factory) {
        // Synchronously require the module. The module must already be loaded,
        // or the call will throw an error:
        // https://github.com/amdjs/amdjs-api/wiki/require#requirestring-
        moduleName = modulePrefix + parsedName.type + 's/' + decamelize(className);
        if (deps.some(function(d) {return moduleName === d;})) {
          try {
            factory = require(moduleName);
          } catch (e) {
            console.warn('Cannot load module ' + moduleName + '.');
          }
        }
      }
      return factory;
    }
  });

  return Resolver;
});
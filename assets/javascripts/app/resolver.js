define([
  'ember',
  'templates'
], function(Ember, templates) {

  var get = Ember.get,
      decamelize = Ember.String.decamelize,
      classify = Ember.String.classify,
      moduleRegistry = require.s.contexts._.defined;

  var Resolver = Ember.DefaultResolver.extend({

    /**
      Look up the template in Ember.TEMPLATES (the default). If not found there, look in
      the 'templates' dependency object instead.

      @param {Object} parsedName an object with the parsed fullName lookup string
      @method resolveTemplate
    */
    resolveTemplate: function(parsedName) {
      var resolvedTemplate = this._super(parsedName);
      if (!resolvedTemplate) {
        resolvedTemplate = templates[parsedName.fullNameWithoutType];
      }
      return resolvedTemplate;
    },

    /**
      Look up the factory object specified by parsedName in the list of
      loaded AMD modules (via require).

      @param {Object} parsedName an object with the parsed fullName lookup string
      @method resolveOther
    */
    resolveOther: function(parsedName) {
      var moduleName,
          className = classify(parsedName.name) + classify(parsedName.type),
          factory = get(parsedName.root, className);

      if (!factory) {
        // Synchronously require the module. The module must already be loaded,
        // or the call will throw an error:
        // https://github.com/amdjs/amdjs-api/wiki/require#requirestring-
        moduleName = this.namespace.modulePrefix + '/' + parsedName.type + 's/' + decamelize(className);
        if (moduleRegistry[moduleName]) {
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
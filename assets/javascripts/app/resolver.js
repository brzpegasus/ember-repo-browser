/**
  An extension of Ember's DefaultResolver.

  Mimosa already compiles templates into `Ember.TEMPLATES`, so we just need to load
  the `templates` module and leave the rest to Ember's DefaultResolver#resolveTemplate.
  Other objects are resolved through the AMD module registry.
*/
import Ember from 'ember';
import templates from 'templates';
import 'modules';

var get = Ember.get,
    decamelize = Ember.String.decamelize,
    classify = Ember.String.classify,
    // requirejs
    _isRequireDefined = (require && 'function' === typeof require.defined && require.defined) || function() {},
    // almond (>= 0.2.6 only)
    _inRequireDefined = (requirejs && requirejs._defined) || {},

    // Figure out whether a module is loaded (should find a more reliable way to do this)
    isModuleDefined = function(id) {
      return _inRequireDefined[id] || _isRequireDefined(id);
    };

var Resolver = Ember.DefaultResolver.extend({
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
      if (isModuleDefined(moduleName)) {
        try {
          factory = require(moduleName);
          if (factory) {
            factory = factory['default'] || factory;
          }
        } catch (e) {
          console.warn('Cannot load module ' + moduleName + '.');
        }
      }
    }
    return factory;
  }
});

export default Resolver;

/**
  An extension of Ember's DefaultResolver. This will attempt to go through
  the default mechanism first to resolve objects (i.e. Ember.TEMPLATES for templates
  and the Application namespace for everything else), and then through the given
  templates hash and AMD module registry.

  When those are missing, Ember will generate its own controllers, routes, views, etc.
*/
import Ember from 'ember';
import templates from 'templates';

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
      if (isModuleDefined(moduleName)) {
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

export default Resolver;

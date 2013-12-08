exports.config = {
  minMimosaVersion: '1.2.2',

  modules: ['jshint', 'csslint', 'server', 'require', 'minify-js', 'minify-css', 'live-reload', 'bower'],

  /* Template compilation */
  template: {
    // Strip out 'templates' when mapping file paths to template names
    nameTransform: /.*\/templates\//,
    // Use Ember version of Handlebars
    handlebars: {
      ember: { enabled: true, path: 'ember' }
    }
  },

  /* Compiler version overrides */
  compilers: {
    libs: {
      handlebars: require('handlebars')
    }
  },

  /* Use Mimosa's Express server to serve the app */
  server: {
    defaultServer: {
      enabled: true,
      onePager: true
    },
    views: {
      compileWith: 'handlebars',
      extension: 'hbs'
    }
  },

  /* Vendor dependency management through Bower */
  bower: {
    copy: { strategy: 'vendorRoot' }
  }
}

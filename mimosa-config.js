exports.config = {

  modules: [
    'ember-handlebars',
    'es6-module-transpiler',
    'less',
    'copy',
    'jshint',
    'csslint',
    'minify-js',
    'minify-css',
    'require',
    'server',
    'live-reload',
    'bower',
    'testem-require'
  ],

  emberHandlebars: {
    emberPath: 'ember' // requirejs alias for vendor/ember
  },

  es6Modules: {
    exclude: [/[/\\]vendor[/\\]/, /[/\\](main|almond|modules)[\.-]/]
  },

  jshint: {
    exclude: ['javascripts/almond.js'],
    rules: {
      esnext: true
    }
  },

  template: {
    // Strip out '*/templates/' when mapping file paths to template names
    nameTransform: /.*\/templates\//
  },

  server: {
    // Use Mimosa's embedded Express server to serve the app
    defaultServer: {
      enabled: true,
      onePager: true
    },
    views: {
      compileWith: 'handlebars',
      extension: 'hbs'
    }
  },

  bower: {
    copy: { strategy: 'vendorRoot' }
  },

  testemRequire: {
    executeDuringWatch: false
  }
}

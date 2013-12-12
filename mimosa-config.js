exports.config = {
  minMimosaVersion: '1.2.2',

  modules: [
    'es6-module-transpiler',
    'jshint',
    'csslint',
    'server',
    'require',
    'minify-js',
    'minify-css',
    'live-reload',
    'bower',
    'testem-require'
  ],

  // https://github.com/dbashford/mimosa-es6-module-transpiler
  es6Modules: {
    exclude: [/[/\\]vendor[/\\]/, /[/\\](main|almond|modules)[\.-]/]
  },

  // https://github.com/dbashford/mimosa-jshint
  jshint: {
    exclude: ['javascripts/almond.js'],
    rules: {
      esnext: true
    }
  },

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

  // https://github.com/dbashford/mimosa-bower
  bower: {
    copy: { strategy: 'vendorRoot' }
  },

  testemRequire: {
    executeDuringWatch: false // phantomjs is too slow on windows
  }
}

exports.config = {

  minMimosaVersion: '1.2.2',

  modules: ['jshint', 'csslint', 'server', 'require', 'minify-js', 'minify-css', 'live-reload', 'bower'],

  template: {
    nameTransform: /.*\/templates?\//,
    handlebars: {
      ember: {
        enabled: true,
        path: 'ember'
      }
    }
  },

  server: {
    defaultServer: {
      enabled: true
    },
    views: {
      compileWith: 'handlebars',
      extension: 'hbs'
    }
  },

  bower: {
    copy: {
      strategy: 'vendorRoot'
    }
  }
}

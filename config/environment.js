/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'whoipedia-front',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    ENV.contentSecurityPolicy = {
      'default-src': "'none'",
      'script-src': "'self'",
      'font-src': "'self'",
      'connect-src': "'self' https://whoipedia-api.herokuapp.com",
      'img-src': "'self'",
      'style-src': "'self' 'unsafe-inline",
      'media-src': "'self'"
    };
  };


  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV.contentSecurityPolicy = {
      'default-src': "'none'",
      'script-src': "'self'",
      'font-src': "'self'",
      'connect-src': "'self' https://whoipedia-api.herokuapp.com/api/v1/episodes",
      'img-src': "'self'",
      'style-src': "'self' 'unsafe-inline",
      'media-src': "'self'"
    }
  }

  return ENV;
};

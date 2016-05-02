// Karma configuration
// Generated on Wed Apr 27 2016 19:43:49 GMT+0300 (EEST)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    files: [
      'node_modules/angular/angular.js',
      'node_modules/angular-route/angular-route.min.js',
      'node_modules/angular-resource/angular-resource.min.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'test/backend-mock.js',
      'node_modules/ng-inline-edit/dist/ng-inline-edit.min.js',

      'app/**/*.js',
      'test/**/*Spec.js'

    ],



    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],

    browsers: ['Chrome'],

    plugins: [
      'karma-jasmine',
      'karma-chrome-launcher'
    ]

  })
}

// karma.conf.js
module.exports = function(config) {
    config.set({
        basePath: '.',
        frameworks: ['jasmine'],
        reporters: ['progress', 'coverage'],
        // list of files / patterns to load in the browser
        files: [
            'node_modules/angular/angular.js',
            'node_modules/angular-route/angular-route.js',
            'node_modules/angular-mocks/angular-mocks.js',
            'node_modules/angular-resource/angular-resource.js',
            'app.js',
            '**/*.jasmine.js'
        ],
        plugins: [
            require('karma-jasmine'),
            //require('karma-phantomjs-launcher'),
            require('karma-chrome-launcher'),
            require('karma-spec-reporter'),
            require('karma-coverage')
        ],
        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            '**/*.jasmine.js': ['coverage']
        },
        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress'],
        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['Chrome'], // You may use 'ChromeCanary', 'Chromium' or any other supported browser
    });
};
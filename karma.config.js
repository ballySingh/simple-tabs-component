// https://www.meziantou.net/test-javascript-code-using-karma-mocha-chai-and-headless-browsers.htm
module.exports = function (config) {
  config.set({
    frameworks: ['mocha', 'chai', 'sinon'],
    files: [
      'node_modules/jquery/dist/jquery.min.js',
      'src/scripts/**/*.js',
      'test/**/*.js',
    ],
    reporters: ['progress'],
    port: 9876, // karma web server port
    colors: true,
    logLevel: config.LOG_INFO,
    browsers: [
      'ChromeHeadless',
      'Firefox',
      'FirefoxDeveloper',
      'FirefoxNightly',
      'IE',
    ],
    autoWatch: false,
    concurrency: Infinity,
    customLaunchers: {
      FirefoxHeadless: {
        base: 'Firefox',
        flags: ['-headless'],
      },
    },
  });
};

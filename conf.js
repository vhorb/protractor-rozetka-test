exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',

  //directConnect: true,
  SELENIUM_PROMISE_MANAGER: false,
  capabilities: {
    'browserName': 'chrome'
  },
  framework: 'jasmine2',
  suites: {
    login: 'tests/test.js',
  },
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    stopSpecOnExpectationFailure: false,
    isVerbose: true
  },
  onPrepare: function () {
    browser.waitForAngularEnabled(false);
  }
};

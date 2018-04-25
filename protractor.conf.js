var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
var log4js = require('log4js');
var params = process.argv;
var args = process.argv.slice(3);

exports.config = {
  allScriptsTimeout: 100000,
  framework: 'jasmine2',
  directConnect: true,

  onPrepare: function () {

    browser.manage().timeouts().implicitlyWait(11000);
    var width = 768;
    var height = 1366;
    browser.driver.manage().window().setSize(768, 1366);
    browser.ignoreSynchronization = false;

    jasmine.getEnv().addReporter(
      new Jasmine2HtmlReporter({
        savePath: __dirname+'/qualityreports/testresults/e2e',
        takeScreenshots: false,
        filePrefix: 'automationReport',
        consolidate: true,
        cleanDestination: false,
        consolidateAll: true

      })
    );
  },

  suites:{

    example:['./e2e/specs/**/*Spec.js',]
  },


  capabilities: {
    'browserName': 'chrome'
  },


  resultJsonOutputFile:'./results.json',

  // Options to be passed to Jasmine-node.
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 100000
  }
};
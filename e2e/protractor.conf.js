// protractor.conf.js

var reporter = require('cucumber-html-reporter');
var mkdirp = require('mkdirp');

exports.config = {

  SELENIUM_PROMISE_MANAGER: false,
  baseUrl: process.env.E2E_BASE_URL || 'http://localhost:4200/',
  directConnect: true,

  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),

  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
      args: ['--no-sandbox', '--window-size=1600,1200', '--disable-gpu'],
    }
  },

  specs: ['./features/*.feature'],
  cucumberOpts: {
    'no-colors': true,
    require: ['./support/hook.ts', './steps/*.steps.ts'],
    format: 'json:./reports/json/cucumber_report.json',
  },

  onPrepare() {
    require('ts-node').register({
      project: require('path').join(__dirname, './tsconfig.json')
    });

    var reportsFolder = process.cwd() + '/reports';
    mkdirp.sync(reportsFolder + '/json'); // folder to store reports
  },

  onComplete() {

    console.log('reports folder',  reportsFolder = process.cwd() + '/reports')
    var reportsFolder = process.cwd() + '/reports';
    var reportOptions = {
      jsonFile: reportsFolder + '/json/cucumber_report.json',
      output: reportsFolder + '/html/cucumber_reporter.html',
      reportSuiteAsScenarios: true,
      scenarioTimestamp: true,
      theme: 'bootstrap',
      storeScreenshots: true,
    };

    try {
      reporter.generate(reportOptions); // invoke cucumber-html-reporter
    } catch (err) {
      console.log(err);
      throw new Error('Failed generate report.');
    }

  }
};

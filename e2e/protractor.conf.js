// protractor.conf.js
/**
 * @type { import("protractor").Config }
 */
exports.config = {
  allScriptsTimeout: 11000,
  specs: ['./features/*.feature'],
  capabilities: {
    browserName: 'chrome'
  },
  directConnect: true,
  baseUrl:  process.env.E2E_BASE_URL ||  'http://localhost:4200/',
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  cucumberOpts: {
    require: ['./steps/*.steps.ts']
  },
  onPrepare() {
    require('ts-node').register({
      project: require('path').join(__dirname, './tsconfig.json')
    });
  }
};
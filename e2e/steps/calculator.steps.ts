import { browser } from "protractor";
import { Given, When, Then, Before } from 'cucumber';
import { CalculatorPage } from '../pages/calculator.po';
import * as chai from 'chai';
import * as chaiAsPromised from 'chai-as-promised';

const calc = new CalculatorPage();
const expect = chai.expect;

Before(() => {
  chai.use(chaiAsPromised);
});

Given('I have navigated to the calculator', async () => {
    await browser.wait(calc.navigateTo(), 5000);
});

When('I add two numbers {string} and {string}', async (string, string2) => {
  await calc.setValues(string, string2);
  await calc.goButton.click();
});

Then('the displayed output should be {string}', string => {
  expect(calc.latestResult.getText()).to.eventually.equal(string);
});
const {Given, When, Then} = require('cucumber');
const CalculatorPage = require('../../page/calculator.page')

const calculatorPage = new CalculatorPage();

Given(/^I start "([^"]*)" application$/, function (appName) {
    calculatorPage.openApplication(appName);
    browser.switchContext('NATIVE_APP');
    browser.pause(3000)
});

When(/^I add "([^"]*)" and "([^"]*)"$/, function (num1, num2) {
    browser.switchContext('NATIVE_APP');
    calculatorPage.add(num1, num2)
});

Then(/^I should get "([^"]*)" as result$/, function (result) {
    calculatorPage.verifyResult(result);
});
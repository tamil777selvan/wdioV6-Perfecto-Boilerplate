const chai = require('chai');
let expect = chai.expect;

class CalculatorPage {

    constructor() {
        this.screen = __filename.slice(__dirname.length + 1, __filename.lastIndexOf(".page"));
        this.screenObjects = require(`../screen/${browser.capabilities.platformName.toLowerCase()}/${this.screen}.screen.js`);
    }

    openApplication(appName) {
        browser.execute('mobile:application:open', {'name': appName});
    }

    add(num1, num2) {
        //Clear all value
        $(this.screenObjects.clear).waitForDisplayed(5000);
        $(this.screenObjects.clear).click();

        //add numbers
        for (let i = 0; i < num1.length; i++) {
            $(this.screenObjects.number(num1.charAt(i))).click();
        }
        $(this.screenObjects.add).click();
        for (let j = 0; j < num2.length; j++) {
            $(this.screenObjects.number(num2.charAt(j))).click();
        }

        //Equals
        $(this.screenObjects.equal).click();
    }

    verifyResult(result) {
        let output = $(this.screenObjects.result).getText();
        expect(output).to.include(result);
    }
}

module.exports = CalculatorPage;
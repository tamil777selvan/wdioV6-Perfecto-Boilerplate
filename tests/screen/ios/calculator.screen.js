class CalculatorScreen {
    constructor() {
        this.number = number => `//*[@label="${number}"]`;
        this.add = '//*[@label="add"]';
        this.equal = '//*[@label="equals"]';
        this.result = '//*[@label="Result"]';
        this.clear = '//*[@label="all clear" or @label="clear"]';
    }
}

module.exports = new CalculatorScreen();
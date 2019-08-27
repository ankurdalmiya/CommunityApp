const {Selector} = require('testcafe');

// Selectors

function select(selector) {
    return Selector(selector).with({boundTestRun: testController});
}

exports.haleywebsite = {
    url: function() {
        return 'https://www.haleybridge.com/';


await testController.navigateTo("http://139.59.178.99/login");

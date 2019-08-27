const {Selector} = require('testcafe');

// Selectors

function select(selector) {
    return Selector(selector).with({boundTestRun: testController});
}

exports.commwebsite = {
    url: function() {
        return 'http://139.59.178.99/login';

},


};
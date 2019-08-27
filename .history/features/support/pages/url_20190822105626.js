const { Selector } = require('testcafe');

// Selectors

function select(selector) {
    return Selector(selector).with({ boundTestRun: testController });
}

exports.commwebsite = {
    url: function () {
        return 'http://139.59.178.99/login';

    },


    typeemail: function () {
        return select('#email');
    },

    typepass: function () {
        return select('#pass');
    },

    loginBtn: function () {
        return select('#nextButton');
    },
    SearchResult: function () {
        return Selector(getcu).nth(0).with({boundTestRun: testController});    },
};
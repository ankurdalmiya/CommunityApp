 //import { Selector } from 'testcafe';
 //const url = "http://139.59.178.99/login";
 const {Selector} = require('testcafe');

//fixture('Login tests').page(url);
function select(selector) {
   return Selector(selector).with({boundTestRun: testController});
}

 export default class Page {
     constructor () {
        this.email = Selector("#username");
        this.password = Selector("#password");

       this.submitButton = Selector("#nextButton")
    }

     async submit(name) {
        await t
           .typeText(this.email, name)
           .typeText(this.password, pass)
            .click(this.submitButton);
    }
 };


 const {Selector} = require('testcafe');

// Selectors

function select(selector) {
    return Selector(selector).with({boundTestRun: testController});
}

exports.haleywebsite = {
    url: function() {
        return 'https://www.haleybridge.com/';
    },
    searchTextBox: function() {
        return select('#search_keywords');
    },

    firstSearchResult: function() {
        return Selector('.search-title').nth(0).with({boundTestRun: testController});
    },
    searchLocation: function() {
        return select('#search_location');
    },
    searchButton: function() {
        return select('.search-value');
    },
    keyword: function() {
        return Selector('.search-title').nth(0).with({boundTestRun: testController});
    },
    location: function() {
        return Selector('.search-page-location').nth(0).with({boundTestRun: testController});
    },
   
};

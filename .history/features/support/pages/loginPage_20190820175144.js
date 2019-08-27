 import { Selector } from 'testcafe';
 const url = "http://139.59.178.99/login";
 const {Selector} = require('testcafe');

fixture('Login tests').page(url);
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
 }
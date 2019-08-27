// import { Selector, t } from 'testcafe';

// export default class Page {
//     constructor () {
//         this.developerName = Selector("#email");
//         this.password=Selector("#pass");
//         this.submitButton = Selector("#nextButton");
    
// }

//      async  email(username) {
//         await t.typeText(this.developerName, username);
//     }
     
//     async password(password) {     
//         await t.typeText(this.password,password)
//    }
//    async submit( ){
//           await t.click(this.submitButton);
//     }
// }

const {Selector} = require('testcafe');

// Selectors

function select(selector) {
    return Selector(selector).with({boundTestRun: testController});
}

exports.commwebsite = {
    url: function() {
      return select('.email');
},
const {Selector} = require('testcafe');

exports.confirmationTable = {
    submissionRow: function() {
        return Selector('.contact-form-submission').with({ boundTestRun: testController }).child('p')
    }
}








//import { Selector, t } from 'testcafe';

// export default class Page {
//     constructor () {
//         this.email = Selector("#username");
//         this.password = Selector("#password");

//         this.submitButton = Selector("#nextButton")
//     }

//     async submit(name) {
//         await t
//             .typeText(this.email, name)
//             .typeText(this.password, pass)
//             .click(this.submitButton);
//     }
// }
const {Selector} = require('testcafe');


export const email = (Selector("#email")) =>{
    testController.typeText(, text1);
}

//   export default class Page {
 
//        async  email(username) {
//           await t.typeText(Selector("#email"), username);
//       }

//       async password(password) {     
//           await t.typeText(Selector("#pass"),password)
//      }
//      async submit( ){
//             await t.click(Selector("#nextButton"));
//      }
//   }
// // .......................................................................................
// // class EmailEnter {
// //     constructor () {
// //         this.enterEmail = Selector('#email').with({boundTestRun: testController});
// //             }
// // }

// // class PasswordEnter {
// //     constructor () {
// //         this.enterPassword= Selector('#pass').with({boundTestRun: testController});
// //             }
// // }

// // class PasswordEnter {
// //     constructor () {
// //         this.enterPassword= Selector('#nextButton').with({boundTestRun: testController});
// //             }
// // }
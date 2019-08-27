const {Selector} = require('testcafe')



async email(mail,text1){
  await testController.typeText(mail,text1);
}

module.exports ={email}
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
// import { Selector } from "testcafe";

  import { Selector } from 'testcafe';

  export default class Page {
 
       async  email(username) {
          await.typeText(Selector("#email"), username);
      }

      async password(password) {     
          await.ty typeText(Selector("#pass"),password)
     }
     async submit( ){
            await t.click(Selector("#nextButton"));
     }
  }

// class EmailEnter {
//     constructor () {
//         this.enterEmail = Selector('#email').with({boundTestRun: testController});
//             }
// }

// class PasswordEnter {
//     constructor () {
//         this.enterPassword= Selector('#pass').with({boundTestRun: testController});
//             }
// }

// class PasswordEnter {
//     constructor () {
//         this.enterPassword= Selector('#nextButton').with({boundTestRun: testController});
//             }
// }
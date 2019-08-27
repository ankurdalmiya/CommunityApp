// import { Selector } from "testcafe";

  import { Selector, t } from 'testcafe';

  export default class Page {
      constructor () {
       this.developerName = Selector("#email");
         this.password=Selector("#pass");
      this.submitButton = Selector("#nextButton");

  }

       async  email(username) {
          await t.typeText(Selector("#email"), username);
      }

      async password(password) {     
          await t.typeText(Selector("#pass"),password)
     }
     async submit( ){
            await t.click(this.submitButton);
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
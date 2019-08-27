import { Selector, t } from 'testcafe';
const 




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
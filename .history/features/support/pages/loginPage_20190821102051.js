import { Selector, t } from 'testcafe';

export default class Page {
    constructor () {
        this.developerName = Selector("#emailMobile");
        this.password=Selector("#password");
        this.submitButton = Selector("#nextButton");
    
}

     async  email(username) {
        await t.typeText(this.developerName, username);
    }
     
    async password(password) {     
        await t.typeText(this.password,password)
   }
   async submit( ){
          await t.click(this.submitButton);
    }
}
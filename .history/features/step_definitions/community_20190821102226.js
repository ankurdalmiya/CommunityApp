 const {Given, When, Then} = require('cucumber');
 const Role = require('testcafe').Role;
 const commPage = require('../support/pages/url');
 const commPage1 = require('../support/pages/loginPage');
 import { Selector } from 'testcafe';



 Given(/^I am on the Login Page of Community Admin panel$/, async function() {
          await testController.navigateTo(commPage.commwebsite.url());
 });
 
import page from './login';

const page = new page();


 fixture `Getting Started`
     .page `http://139.59.178.99/login`;
      test('I open  the community app Website',async t =>{
     await page.email("sss@gmail.com");
       });
     test('I open on the community app Website', async t => {
     await page.password("123") ;     });
      test('I open on the community app Website', async t => {
     await page.submit('#nextButton');
     
    });

 

//  When(/^I submit the login with user name and password$/, async function(text) {
//      await testController.typeText(commPage)
//  });
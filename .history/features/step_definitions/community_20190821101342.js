 const {Given, When, Then} = require('cucumber');
 const Role = require('testcafe').Role;
 const commPage = require('../support/pages/url');
 const commPage1 = require('../support/pages/loginPage');



 Given(/^I am on the Login Page of Community Admin panel$/, async function() {
     await testController.navigateTo();
 });

 

//  When(/^I submit the login with user name and password$/, async function(text) {
//      await testController.typeText(commPage)
//  });
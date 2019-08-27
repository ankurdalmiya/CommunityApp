 const {Given, When, Then} = require('cucumber');
 const Role = require('testcafe').Role;
 const commPage = require('../support/pages/url');
 const Page = require('../support/pages/loginPage');
 
const page=new page();


 Given(/^I am on the Login Page of Community Admin panel$/, async function() {
          await testController.navigateTo(commPage.commwebsite.url());
 });

 When(/^I login using my credentials "([^"]*)"$/, async function(text) {
    //     await testController.typeText(commPage.commwebsite.typeemail(), text);
    // });
 
//  When(/^I login using my credentials "([^"]*)"$/, async function(text) {
//     await testController.typeText(commPage.commwebsite.typeemail(), text);
// });


// const page = new page();


//  fixture `Getting Started`
//      .page `http://139.59.178.99/login`;
//       test('I open  the community app Website',async t =>{
//      await page.email("sss@gmail.com");
//        });
//      test('I open on the community app Website', async t => {
//      await page.password("123") ;     });
//       test('I open on the community app Website', async t => {
//      await page.submit('#nextButton');
     
//     });

 

//  When(/^I submit the login with user name and password$/, async function(text) {
//      await testController.typeText(commPage)
//  });
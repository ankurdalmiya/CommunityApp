const { Given, When, Then } = require('cucumber');
const Role = require('testcafe').Role;
const commPage = require('../support/pages/url');
//  const Page = require('../support/pages/loginPage');
const wait = require('util').promisify(setTimeout);


Given(/^I am on the Login Page of Community Admin panel$/, async function () {
    await testController.navigateTo(commPage.commwebsite.url());
    await wait(2000);

});


When(/^I login using "([^"]*)" and "([^"]*)"$/, async function (text1, text2) {
    await testController.typeText(commPage.commwebsite.typeemail(), text1);
    await wait(2000);
    await testController.typeText(commPage.commwebsite.typepass(), text2);
    await wait(2000);
    await testController.click(commPage.commwebsite.loginBtn());
    await wait(5000);
});

Then(/^Status should be "([^"]*)"$/, async function (text1) {
    await t.expect(Selector('#email').innerText).eql( });

    await testController.typeText(commPage.commwebsite.typeemail(), text1);
    await wait(2000);
    await testController.typeText(commPage.commwebsite.typepass(), text2);
    await wait(2000);
    await testController.click(commPage.commwebsite.loginBtn());
    await wait(5000);
});
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
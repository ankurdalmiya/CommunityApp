const {Given, When, Then} = require('cucumber');
const Role = require('testcafe').Role;
const commPage = require('../support/pages/url');
//const commPage = require('../support/pages/loginPage');

Given(/^I am on the communityapp login page$/, async function() {
    await testController.navigateTo(commPage.);
});

// When(/^I submit the login with user name$/, async function(text) {
//     await testController.typeText(commPage)
// });
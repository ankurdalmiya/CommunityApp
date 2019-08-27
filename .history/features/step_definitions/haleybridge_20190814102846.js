const {Given, When, Then} = require('cucumber');
const Role = require('testcafe').Role;
// const haleyPage = require('../support/pages/haley-page');

Given(/^I am on the communityapp login page$/, async function() {
    await testController.navigateTo(haleyPage.haleywebsite.url());
});


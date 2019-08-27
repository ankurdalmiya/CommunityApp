import { Selector, t } from 'testcafe';
const url = http://139.59.178.99/login";

fixture('Login tests').page(url);



const formConfirmationPage = require('../support/pages/form_confirmation_page.js')

Then('I see {string} in the name field on the submission form', async function (name) {
    await testController.expect(formConfirmationPage.confirmationTable.submissionRow().innerText).contains(name)
});

Then('I see {string} in the email field on the submission form', async function (email) {
    await testController.expect(formConfirmationPage.confirmationTable.submissionRow().nth(1).innerText).contains(email)
});

Then('I see {string} in the expereince field on the submission form', async function (experience) {
    await testController.expect(formConfirmationPage.confirmationTable.submissionRow().nth(3).innerText).contains(experience)
});

Then('I see {string} in the message field on the submission form', async function (message) {
    await testController.expect(formConfirmationPage.confirmationTable.submissionRow().nth(6).innerText).contains(message)
});





// const {Given, When, Then} = require('cucumber');
// const Role = require('testcafe').Role;
// const commPage = require('../support/pages/url');
// const commPage1 = require('../support/pages/loginPage');

// Given(/^I am on the communityapp login page$/, async function() {
//     await testController.navigateTo(commPage.commwebsite.url());
// });

// When(/^I submit the login with user name$/, async function(text) {
//     await testController.typeText(commPage)
// });
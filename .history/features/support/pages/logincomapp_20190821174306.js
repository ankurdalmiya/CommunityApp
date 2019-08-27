
const {Given, When, Then} = require('cucumber');
const Role = require('testcafe').Role;
const commPage = require('../support/pages/url');
//  const Page = require('../support/pages/loginPage');
const wait = require('util').promisify(setTimeout);


logincommapp = new logincommapp();
await testController.navigateTo(commPage.commwebsite.url());
         await wait(2000);

});
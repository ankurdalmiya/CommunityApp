import { Selector } from 'testcafe';
//import pages from './loginPage';
// const page = new Page();

import registeredUser from './role';




fixture `Getting Started`
    .page `https://github.com`
    .beforeEach(async t => {


    });

test ('Check user avatar')

// test('My first test', async t => {
//     await page
//     .typeText(page.email,'#emailMobile')
//     .typeText(page.password,'#password')
//     .click(page.submitButton,'#nextButton')
    
// });
import { Selector } from 'testcafe';
import Page from './loginPage';


const page = new Page();


fixture `Getting Started`
    .page `http://139.59.178.99/login`;

test('My first test', async t => {
    await page
    .typeText(page.email,'#')
    .typeText(page.password,'#password')
    .click(page.submitButton,'#nextButton')

    
});
import { Selector } from 'testcafe';
import Page from './loginPage';


const page = new Page();


fixture `Getting Started`
    .page `http://devexpress.github.io/testcafe/example`;

test('My first test', async t => {
    await page
    .typeText(page.email,'#username')
    .typeText(page.password,'#password')
    .c

    .submit("pankaj");
});
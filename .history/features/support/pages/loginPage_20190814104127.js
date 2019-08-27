import { Selector, t } from 'testcafe';

export default class Page {
    constructor () {
        this.developerName = Selector("#developer-name");
        this.submitButton = Selector("#submit-button")
    }

    async submit(name) {
        await t
            .typeText(this.developerName, name)
            .click(this.submitButton);
    }
}
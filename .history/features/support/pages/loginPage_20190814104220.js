import { Selector, t } from 'testcafe';

export default class Page {
    constructor () {
        this.developerName = Selector("#form-control input-underline input-lg ng-pristine ng-valid ng-touched");
        this.submitButton = Selector("#submit-button")
    }

    async submit(name) {
        await t
            .typeText(this.developerName, name)
            .click(this.submitButton);
    }
}
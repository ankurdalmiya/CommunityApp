import { Selector, t } from 'testcafe';

export default class Page {
    constructor () {
        this.email = Selector("#username");
        this.password = Selector("#form-control input-underline input-lg ng-pristine ng-valid ng-touched");

        this.submitButton = Selector("#submit-button")
    }

    async submit(name) {
        await t
            .typeText(this.email, name)
            .click(this.submitButton);
    }
}
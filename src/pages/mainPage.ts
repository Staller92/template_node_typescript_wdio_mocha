import BasePage from 'src/pages/basePage';

export default class MainPage extends BasePage {
    private loginButtonXpath: string = '//*[contains(@class, "user-profile")]//following-sibling::*/a[contains(text(), "Store Login")]';
    private url: string = 'https://shop.westerndigital.com';

    constructor() {
        super();
        super.open(this.url);
    };

    getLoginButtonElement() {
        return $(this.loginButtonXpath);
    }

}


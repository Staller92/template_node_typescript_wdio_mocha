import BasePage from 'src/pages/basePage';

export default class LoginPage extends BasePage {
    private emailFieldXpath: string = '//input[contains(@name,"j_username")]';
    private passwordField: string = '//input[contains(@name,"j_password")]';
    private signButton: string = '//form[contains(@name,"loginForm")]//button[contains(@type,"submit")]';
    private loginErrorMessage: string = '//*[contains(@class,"login-error")]';

    getEmailField() {
        return $(this.emailFieldXpath);
    }

    getPasswordField() {
        return $(this.passwordField);
    }

    getSignButton() {
        return $(this.signButton);
    }

    getLoginErrorMessage() {
        $(this.loginErrorMessage).waitForDisplayed();
        return $(this.loginErrorMessage).getText();
    }

}


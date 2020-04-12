import MainPage from 'src/pages/mainPage';
import LoginPage from 'src/pages/loginPage';
const {expect} = require('chai');

describe('Log in tests', function() {
    it('Error message should be displayed in case of incorrect data', function() {
        const mainPage = new MainPage();
        mainPage.getLoginButtonElement().click();
        const loginPage = new LoginPage();
        loginPage.getEmailField().addValue('email@email.com');
        loginPage.getPasswordField().addValue('password');
        loginPage.getSignButton().click();
        browser.pause(3000);
        const errorMessage = loginPage.getLoginErrorMessage();
        expect(errorMessage, 'Error message is not correct').to.be.equal('Your username or password was incorrect.');

    });
});

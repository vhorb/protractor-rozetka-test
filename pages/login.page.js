const BasePage = require('./basepage');

class LoginPage extends BasePage {
    constructor() {
        super();
        this.pageTitle = 'Интернет-магазин ROZETKA™: официальный сайт самого популярного онлайн-гипермаркета в Украине';
        this.userNameInput = element(by.css('#auth_email'));
        this.passwordInput = element(by.css('#auth_pass'));
        this.linkLogin = element(by.css('.header-topline__user-link.link-dashed'));
        this.signInButton = element(by.buttonText('Войти'))
        
        this.url = 'http://rozetka.com.ua/';
        this.ec = protractor.ExpectedConditions;
        this.defaultTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
    };

    async open() {
        await browser.get(this.url);
    };

    async isLoaded() {
        await super.isLoaded(this.linkLogin);
        return await super.pageTitleCompare(this.pageTitle);
    };

    async inputUserName(userNameText) {
        await this.sendTextToElement(this.userNameInput, userNameText);
    };

    async inputPassword(pass) {
        await this.sendTextToElement(this.passwordInput, pass);
    };

    async clickLinkLogon() {
       await this.clickElement(this.linkLogin);

    }

    async clickSignIn() {
        await this.clickElement(this.signInButton);
    };
}

module.exports = new LoginPage();
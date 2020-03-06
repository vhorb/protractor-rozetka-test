const {loginPage} = require('../pages')

describe('Rozetka Product Price test', function() {
    it('should navigate to website and verify that it is correct', async() => {
        await loginPage.open();
        expect(await loginPage.isLoaded()).toBeTruthy('Login page should be loaded');
        expect(loginPage.getCurrentUrl()).toEqual(loginPage.url);
    });
 
    it('should sign in', async() => {
        const credentials = {username: 'test1', password: 'test1'}
        await loginPage.clickLinkLogon();
        await loginPage.inputUserName(credentials.username);
        await loginPage.inputPassword(credentials.password);
        await loginPage.clickSignIn();
        expect(await loginPage.isLoaded()).toBeTruthy('Login page should be loaded');
    });

    xit("search should have more than 5 results", function() {
        expect(true).toBe(false);
    });

    xit("product page should be loaded", function() {
        expect(true).toBe(false);
    });

    xit("price  should be less than 10000", function() {
        expect(true).toBe(false);
    });

    xit("can be declared 'xit'", function() {
        expect(true).toBe(false);
    });
});
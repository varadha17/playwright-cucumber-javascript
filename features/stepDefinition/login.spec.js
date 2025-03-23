const { Given, When } = require('@cucumber/cucumber');
const { Before, After, setDefaultTimeout } = require('@cucumber/cucumber');
const loginPage = require('../../pages/loginPage')

setDefaultTimeout(7000)

  Given('enter valid username {string}', async function (user) {
    this.loginpage = new loginPage(this.page);
    await this.loginpage.setUsername(user)
  });

  Given('enter valid password {string}', async function (password) {
    await this.loginpage.setPassword(password)
  });

  Given('click login button', async function () {
    await this.loginpage.clickLoginButton();
  });

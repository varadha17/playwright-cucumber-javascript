const helper = require("../features/support/helper");
const search = require("./search");

class loginPage extends helper{

    constructor(page){
        super(page)
    }

    async setUsername(user){
        await this.waitAndFill("#user-name",user);
    }

    async setPassword(password){
        await this.waitAndFill("#password",password)
        
    }

    async clickLoginButton(){
        await this.page.waitForSelector(".btn_action")
        await this.page.click(".btn_action")
    }
    
}

module.exports = loginPage



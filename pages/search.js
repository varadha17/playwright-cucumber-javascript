const helper = require("../features/support/helper");


class search extends helper{

    constructor(page){
        super(page)
    }

    async getTitleforPage(){
        return await this.page.textContent("//div[text()='Products']")
    }

    async clickProduct(){
        //await this.getAllTextContent('Sauce Labs Onesie')
        await this.getAllTextContent('Sauce Labs Onesie')
        //await this.pageRefresh();
        await this.moveBackward();
    }

}

module.exports = search
const helper = require("../features/support/helper");


class search extends helper{

    constructor(page){
        super(page)
    }

    async getTitleforPage(){
        return await this.page.textContent("//div[text()='Products']")
    }


}

module.exports = search
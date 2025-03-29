const { chromium } = require('playwright');

class helper{

    /**
     * @param {import('playwright').Page} page
     */

    constructor(page){
        this.page = page;
    }

    /**
     * @param {string} selector
     * @param {string} text
     */
    async waitAndFill(selector, text){
        await this.page.fill(selector, text)
    }

    async getAllTextContent(text){
        await this.page.getByText(text).click()
    }

    async getAllTextContentByRole(role,text){
        await this.page.getByRole(role).filter({hasText:text}).click()
    }

    async moveBackward(){
        await this.page.goBack();
    }

    async moveForward(){
        await this.page.goForward();
    }

    async pageRefresh(){
        await this.page.reload();
    }

}

module.exports = helper
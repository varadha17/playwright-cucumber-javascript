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

}

module.exports = helper
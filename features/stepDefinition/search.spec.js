const { Given } = require("@cucumber/cucumber");
const search = require("../../pages/search");

    Given('get products text from SearchPage', async function () {
        this.searchpage = new search(this.page) 
        await this.searchpage.page.waitForTimeout(4000)
        const titles = await this.searchpage.getTitleforPage(); 
        console.log(titles)
    });
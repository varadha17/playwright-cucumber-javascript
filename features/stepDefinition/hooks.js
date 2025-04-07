// features/support/hooks.js
const { Before, After } = require('@cucumber/cucumber');
const { chromium } = require('playwright');
require('dotenv').config();

Before(async function()  {
        global.browser  = await chromium.launch({
            headless: true
        });
        this.context  = await global.browser.newContext();
        this.page = await this.context.newPage();
        this.page.goto(process.env.url)
});

After(async function(){
    if(this.context){
        await this.context.close()
    }

    if(global.browser){
        await global.browser.close();
    }
})






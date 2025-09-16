//example.page.ts
import type { Page } from  '@playwright/test';
export class ExampleClass{
    readonly page: Page
    constructor(page:Page){
        this.page=page
    }
    async typeSearchText(){
       // await this.page.type('textarea[name="q"]',"Playwright");
       await this.page.fill('input[name="q"]',"Playwright");
    }
    async pressEnter(){
       await this.page.keyboard.press('Enter');
    }
    async searchResult(){
       return this.page.innerText('//h1[contains(text(),"Search Results")]')
    }
    async theWholeDamnPage(){
         return this.page.innerText('body');
    }
}
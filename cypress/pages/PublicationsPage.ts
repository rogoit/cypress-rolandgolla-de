import {BasePage} from "./BasePage";

export class PublicationsPage extends BasePage
{
    get items() {
        return cy.get('#__next > div.relative > main > div > div > div > div > ul > li');
    }
}

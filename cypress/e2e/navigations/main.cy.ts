import {StartPage} from "@/pages/StartPage"

describe('Main navigation', () => {
    const startPage: StartPage = new StartPage();

    beforeEach(() => {
        cy.visit('/');
        startPage.mainNavigationItems.should('exist');
    });

    it('On desktop is no mobile menu, on mobile view menu is there and can be open and clode. Go back on desktop will bring back main menu.', () => {
        cy.viewport('macbook-13');
        startPage.mainNavigationResponsiveMobileButtion.should('not.be.visible');
        cy.viewport('iphone-x');
        startPage.mainNavigationResponsiveMobileButtion.should('be.visible');
        startPage.mainNavigationItems.should('not.be.visible');
        startPage.mainNavigationResponsiveMobileButtion.click();
        startPage.mainNavigationItems.should('be.visible');
        startPage.mainNavigationResponsiveMobileButtionClose.click();
        startPage.mainNavigationItems.should('not.be.visible');
        cy.viewport('macbook-13');
        startPage.mainNavigationItems.should('be.visible');
    })
})

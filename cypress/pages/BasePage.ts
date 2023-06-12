export abstract class BasePage {
    get mainNavigationItems() {
        return cy.get('nav > ul > li > a');
    }

    get mainNavigationResponsiveMobileButtion() {
        return cy.contains('button', 'Menu');
    }

    get mainNavigationResponsiveMobileButtionClose() {
        return cy.get('button[aria-label="Menu schließen"]');
    }
}

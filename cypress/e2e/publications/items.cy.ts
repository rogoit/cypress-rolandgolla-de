import {PublicationsPage} from "@/pages/PublicationsPage";

describe('Validate publications', () => {
    const publicationsPage: PublicationsPage = new PublicationsPage();

    beforeEach(() => {
        cy.visit('/publikationen');
        publicationsPage.items.should('exist');
    });

    it('Validate there vare more than 3 items', () => {
        publicationsPage.items.should('have.length.gt', 3);
    })
})

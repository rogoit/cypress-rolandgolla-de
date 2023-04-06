describe('a11y tests', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('TESTIFY ally plugin', () => {
        cy.injectAxe()
        cy.checkA11y(null, {
            rules: {
                'scrollable-region-focusable': { enabled: false },
                'region': {enabled: false},
            },
        });
    })

})

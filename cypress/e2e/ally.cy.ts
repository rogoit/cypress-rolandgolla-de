describe('a11y tests', () => {
  it('Validate light mode', () => {
    cy.visit('/', {
      onBeforeLoad(win) {
        cy.stub(win, 'matchMedia')
          .withArgs('(prefers-color-scheme: light)')
          .returns({
            matches: true,
          });
      },
    });

    axeValidation();
  });

  it('Validate dark mode', () => {
    cy.visit('/', {
      onBeforeLoad(win) {
        cy.stub(win, 'matchMedia')
          .withArgs('(prefers-color-scheme: dark)')
          .returns({
            matches: true,
          });
      },
    });

    axeValidation();
  })  
});



function axeValidation() {
  cy.injectAxe();
  cy.checkA11y(
    {
      exclude: ['#klaro', '.sf-toolbar-status'],
    },
    {
      rules: {
        'scrollable-region-focusable': { enabled: false },
        region: { enabled: false },
      },
    }
  );
}

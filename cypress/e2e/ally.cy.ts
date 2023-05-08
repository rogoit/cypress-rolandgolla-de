describe('a11y tests', () => {
  it('TESTIFY ally plugin', () => {
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

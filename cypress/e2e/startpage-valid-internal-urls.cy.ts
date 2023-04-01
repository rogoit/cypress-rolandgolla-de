/// <reference types="Cypress" />
describe('TESTIFY base tests', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Imprint link on starpage is clickable', () => {
    cy.ttValidateImprintClickable();
  });

  it('Validates no google fonts are being loaded', () => {
    cy.ttValidateNoGoogleFonts();
  });
});

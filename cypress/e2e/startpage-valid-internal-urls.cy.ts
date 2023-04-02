/// <reference types="Cypress" />
describe('TESTIFY base tests', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Imprint link on starpage is clickable', () => {
    cy.ttValidateImprintClickable();
  });

  it('Internal links status ok', () => {
    cy.ttEveryInternalLinkStatusOk();  
  })  
  
  it('Internal pages status ok', () => {
    cy.ttEveryInternalLinkStatusOk();  
  })  

});

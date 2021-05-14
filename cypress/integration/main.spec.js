/// <reference types="cypress" />

context('Main', () => {
  beforeEach(() => {
    cy.visit('src/index.html');
  });
  describe('Tabs', () => {
    it('should have a list of tabs', () => {
      cy.get("[role='tablist']").should('be.visible');
    });
    it('should have football in first tab', () => {
      cy.get("[role='tablist'] button").contains('Football');
    });
    it('should not be selected second tab', () => {
      cy.get("[role='tablist'] button")
        .eq(1)
        .should('have.attr', 'aria-selected', 'false');
    });
    it('should switch to the second tab when clicked', () => {
      cy.get("[role='tablist'] button")
        .eq(1)
        .click()
        .should('have.attr', 'aria-selected', 'true');
    });
    it('should display correct image and context', () => {
      cy.get('#panel-2')
        .find('img')
        .should('have.attr', 'src')
        .should('include', 'assets/images/tennis.svg');
      cy.get('#panel-2').find('p').contains('Lorem ipsum dolor');
    });
  });
});

describe('Main page', () => {
  it('should correctly load main page', () => {
    // Start from the index page
    cy.visit('http://localhost:3000');

    // The new url should include "/about"
    cy.url().should('include', '/');

    // The new page should contain an h1 with "About page"
    cy.get('div').contains('User Rating');

    cy.get('div').contains('How do you like our product');
  });

  it('should correctly output user text for each rating', () => {
    // Start from the index page
    cy.visit('http://localhost:3000');

    cy.get('label[for*="rate-1"]').click();
    cy.get('form').contains('Hate it');

    cy.get('label[for*="rate-2"]').click();
    cy.get('form').contains('Very bad');

    cy.get('label[for*="rate-3"]').click();
    cy.get('form').contains('It is ok');

    cy.get('label[for*="rate-4"]').click();
    cy.get('form').contains('Very good');

    cy.get('label[for*="rate-5"]').click();
    cy.get('form').contains('Love it');
  });

  it('should send feedback', () => {
    cy.visit('http://localhost:3000');

    cy.get('label[for*="rate-3"]').click();
    cy.get('form').contains('It is ok');

    cy.get('button[type*="submit"]').click();

    cy.get('div').contains('Thanks for your rating!');
  });

  it('should edit feedback', () => {
    cy.visit('http://localhost:3000');

    cy.get('label[for*="rate-3"]').click();
    cy.get('form').contains('It is ok');

    cy.get('button[type*="submit"]').click();

    cy.get('div').contains('EDIT').click();

    cy.get('textarea').should('be.visible');

    cy.get('label[for*="rate-4"]').click();

    cy.get('button[type*="submit"]').click();
  });
});

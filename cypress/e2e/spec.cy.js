describe('template spec', () => {
  it('get CSP headers', () => {
    cy.visit('/');
    cy.contains('script-src');
    cy.contains('default-src');
  });
});

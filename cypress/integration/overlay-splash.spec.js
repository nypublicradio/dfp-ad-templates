const imageUrlDesktop = 'https://picsum.photos/800/600';
const imageUrlMobile = 'https://picsum.photos/240/400';
const clickthroughUrl = 'http://www.wnyc.org';

describe('Overlay spec', function() {
  it('Desktop test', function() {
    cy.viewport(1280, 1024);
    cy.visit('/');
    cy.get('body');
    cy.get('[data-cy=splash-link]').should(
      'have.attr',
      'href',
      clickthroughUrl,
    );
    cy.get('[data-cy=splash-img]').should('have.attr', 'src', imageUrlDesktop);
  });
  it('Mobile test', function() {
    cy.viewport(600, 1024);
    cy.visit('/');
    cy.reload();
    cy.get('body');
    cy.get('[data-cy=splash-link]').should(
      'have.attr',
      'href',
      clickthroughUrl,
    );
    cy.get('[data-cy=splash-img]').should('have.attr', 'src', imageUrlMobile);
  });
  it('Close button functionality', function() {
    cy.visit('/');
    cy.get('[data-cy=close-button]').click();
    cy.get('[data-cy=splash-link]').should('not.exist');
    cy.getCookie('hasSeenSplash').should('exist');
  });
  it('Clicking outside splash removes splash', function() {
    cy.visit('/');
    cy.get('[data-cy=splash-background]').click();
    cy.get('[data-cy=splash-link]').should('not.exist');
    cy.getCookie('hasSeenSplash').should('exist');
  });
  it('Hitting escape key removes splash', function() {
    cy.visit('/');
    cy.get('body').type('{esc}');
    cy.get('[data-cy=splash-link]').should('not.exist');
    cy.getCookie('hasSeenSplash').should('exist');
  });
  it('Clicking splash removes splash', function() {
    cy.visit('/');
    cy.get('[data-cy=splash-img]').click();
    cy.get('[data-cy=splash-link]').should('not.exist');
    cy.getCookie('hasSeenSplash').should('exist');
  });
});

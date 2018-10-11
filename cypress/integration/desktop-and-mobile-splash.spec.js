const DESKTOP_MOBILE_SPLASH_VARS = {
  imageUrlDesktop: 'https://picsum.photos/800/600',
  imageUrlMobile: 'https://picsum.photos/240/400',
  clickthroughUrl: 'http://www.wnyc.org',
  templateName: 'desktop-and-mobile-splash',
  backgroundColor: '#0000FF',
};

describe('Desktop/mobile splash spec', function() {
  it('Desktop test', function() {
    cy.viewport(1280, 1024);
    cy.visit('/desktop-and-mobile-splash.html');
    cy.get('body');
    cy.get('[data-cy=splash-link]').should(
      'have.attr',
      'href',
      DESKTOP_MOBILE_SPLASH_VARS.clickthroughUrl,
    );
    cy.get('[data-cy=splash-img]').should(
      'have.attr',
      'src',
      DESKTOP_MOBILE_SPLASH_VARS.imageUrlDesktop,
    );
  });
  it('Mobile test', function() {
    cy.viewport(600, 1024);
    cy.visit('/desktop-and-mobile-splash.html');
    cy.reload();
    cy.get('body');
    cy.get('[data-cy=splash-link]').should(
      'have.attr',
      'href',
      DESKTOP_MOBILE_SPLASH_VARS.clickthroughUrl,
    );
    cy.get('[data-cy=splash-img]').should(
      'have.attr',
      'src',
      DESKTOP_MOBILE_SPLASH_VARS.imageUrlMobile,
    );
  });
  it('Close button functionality', function() {
    cy.visit('/desktop-and-mobile-splash.html');
    cy.get('[data-cy=close-button]').click();
    cy.get('[data-cy=splash-link]').should('not.exist');
    cy.getCookie('hasSeenSplash').should('exist');
  });
  it('Clicking outside splash removes splash', function() {
    cy.visit('/desktop-and-mobile-splash.html');
    cy.get('[data-cy=splash-background]').click();
    cy.get('[data-cy=splash-link]').should('not.exist');
    cy.getCookie('hasSeenSplash').should('exist');
  });
  it('Hitting escape key removes splash', function() {
    cy.visit('/desktop-and-mobile-splash.html');
    cy.get('body').type('{esc}');
    cy.get('[data-cy=splash-link]').should('not.exist');
    cy.getCookie('hasSeenSplash').should('exist');
  });
  it('Clicking splash removes splash', function() {
    cy.visit('/desktop-and-mobile-splash.html');
    cy.get('[data-cy=splash-img]').click();
    cy.get('[data-cy=splash-link]').should('not.exist');
    cy.getCookie('hasSeenSplash').should('exist');
  });
});

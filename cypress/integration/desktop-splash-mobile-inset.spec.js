const DESKTOP_SPLASH_MOBILE_INSET = {
  imageUrlDesktop: 'https://picsum.photos/800/600',
  imageUrlMobile: 'https://picsum.photos/240/400',
  clickthroughUrl: 'http://www.wnyc.org',
  templateName: 'desktop-splash-mobile-inset',
  backgroundColor: '#0000FF',
};

describe('Desktop splash/mobile inset test', function() {
  it('Desktop test', function() {
    cy.viewport(1280, 1024);
    cy.visit('/desktop-splash-mobile-inset.html');
    cy.get('body');
    cy.get('[data-cy=splash-link]').should(
      'have.attr',
      'href',
      DESKTOP_SPLASH_MOBILE_INSET.clickthroughUrl,
    );
    cy.get('[data-cy=splash-img]').should(
      'have.attr',
      'src',
      DESKTOP_SPLASH_MOBILE_INSET.imageUrlDesktop,
    );
  });
  it('Close button functionality', function() {
    cy.visit('/desktop-splash-mobile-inset.html');
    cy.get('[data-cy=close-button]').click();
    cy.get('[data-cy=splash-link]').should('not.exist');
    cy.getCookie('hasSeenSplash').should('exist');
  });
  it('Clicking outside splash removes splash', function() {
    cy.visit('/desktop-splash-mobile-inset.html');
    cy.get('[data-cy=splash-background]').click();
    cy.get('[data-cy=splash-link]').should('not.exist');
    cy.getCookie('hasSeenSplash').should('exist');
  });
  it('Hitting escape key removes splash', function() {
    cy.visit('/desktop-splash-mobile-inset.html');
    cy.get('body').type('{esc}');
    cy.get('[data-cy=splash-link]').should('not.exist');
    cy.getCookie('hasSeenSplash').should('exist');
  });
  it('Clicking splash removes splash', function() {
    cy.visit('/desktop-splash-mobile-inset.html');
    cy.get('[data-cy=splash-img]').click();
    cy.get('[data-cy=splash-link]').should('not.exist');
    cy.getCookie('hasSeenSplash').should('exist');
  });
  it('Mobile test', function() {
    //shows the inset thingy with an image
    cy.viewport(360,572);
    cy.visit('/desktop-splash-mobile-inset.html');
    cy.get("[data-cy=inset-link]").should('have.attr', 'href', DESKTOP_SPLASH_MOBILE_INSET.clickthroughUrl)

  });
  it('Mobile, clicking the x closes it', function() {
    //shows the inset thingy with an image
    cy.viewport(360,572);
    cy.visit('/desktop-splash-mobile-inset.html');
    cy.get('[data-cy=close-button]').click();
    cy.get('[data-cy=inset]').should('not.exist');
    cy.getCookie('hasSeenSplash').should('exist');
  });
  it('Mobile, clicking the link closes it', function() {
    //shows the inset thingy with an image
    cy.viewport(360,572);
    cy.visit('/desktop-splash-mobile-inset.html');
    cy.get('[data-cy=inset]').click();
    cy.get('[data-cy=inset]').should('not.exist');
    cy.getCookie('hasSeenSplash').should('exist');
  });
});

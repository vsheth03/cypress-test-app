describe('App testing', () => {
    beforeEach('Visit page', () => {
        cy.visit('/');
    });

    it('Check if button appears', () => {
        const btn = cy.contains('Click me');
        expect(btn).to.exist;
    });

    it('Check if button clicks', () => {
        const btn = cy.contains('Click me');
        btn.click();
        cy.contains('I\'m a piece of text.').should('be.visible');
    });
});
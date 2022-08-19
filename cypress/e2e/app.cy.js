describe('App testing', () => {
    it('Check if button appears', () => {
        const btn = cy.get('[id="btn"]').contains('Click me');
        expect(btn).to.exist;
    });
});
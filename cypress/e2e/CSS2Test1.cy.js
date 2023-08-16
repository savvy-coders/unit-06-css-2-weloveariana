describe('CSS Challenge', () => {

    beforeEach(() => {
      cy.visit('/')
    })
  
    it('sets box width, padding, and background color', () => {
      cy.get('.box')
        .should('have.css', 'width', '400px')
        .and('have.css', 'padding-top', '10px')
        .and('have.css', 'padding-bottom', '10px')  
        .and('have.css', 'background-color', 'rgb(173, 216, 230)')
    });
});
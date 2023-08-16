describe('CSS Challenge', () => {

    beforeEach(() => {
      cy.visit('/')
    })
  
    it('fixes element to bottom right', () => {
      cy.get('.fixed-element')
        .should('have.css', 'position', 'fixed')
        .and('have.css', 'bottom', '20px')
        .and('have.css', 'right', '20px')
    })
})
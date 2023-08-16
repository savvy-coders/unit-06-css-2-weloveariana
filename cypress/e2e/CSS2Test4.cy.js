describe('CSS Challenge', () => {

    beforeEach(() => {
      cy.visit('/')
    })
  
  
  
    it('sets static element to relative', () => {
      cy.get('.static-element').should('have.css', 'position', 'relative')
    })
});
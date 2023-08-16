describe('CSS Challenge', () => {

    beforeEach(() => {
      cy.visit('/')
    })
  
    it('moves relative element', () => {
      cy.get('.relative-element').should('have.css', 'left', '80px') 
    })
})
describe('CSS Challenge', () => {

    beforeEach(() => {
      cy.visit('/')
    })
  
    it('sets box sizing to content-box', () => {
      cy.get('.box').should('have.css', 'box-sizing', 'content-box') 
    })
});
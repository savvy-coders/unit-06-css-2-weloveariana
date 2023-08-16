describe('CSS Challenge', () => {

    beforeEach(() => {
      cy.visit('/')
    })
  
    it('sets inline flex on container', () => {
      cy.get('.container').should('have.css', 'display', 'inline-flex')
    })
})

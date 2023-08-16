describe('CSS Challenge', () => {

    beforeEach(() => {
      cy.visit('/')
    })
  
    it('floats columns right', () => {
      cy.get('.column').should('have.css', 'float', 'right')
    })
})
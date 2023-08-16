describe('CSS Challenge', () => {

    beforeEach(() => {
      cy.visit('/')
    })
  
    it('sets absolute element position', () => {
      cy.get('.absolute-element')
        .should('have.css', 'position', 'relative')
        .and('have.css', 'top', '150px')
    })
})
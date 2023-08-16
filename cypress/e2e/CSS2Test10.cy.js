describe('CSS Challenge', () => {

    beforeEach(() => {
      cy.visit('/')
    })
  
    it('sets width and margin on items', () => {
      cy.get('.item')
        .should('have.css', 'width', '200px')
        .and('have.css', 'margin-right', '20px')
    })
})
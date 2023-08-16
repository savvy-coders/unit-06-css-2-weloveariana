describe('CSS Challenge', () => {

    beforeEach(() => {
      cy.visit('/')
    })
  
    it('creates grid layout', () => {
      cy.get('.grid-container')
        .should('have.css', 'grid-template-columns', '223.891px 223.891px 223.891px 223.891px 0px 88.4375px')
        .and('have.css', 'grid-template-rows', '100px 100px 100px 0px 18px')
    })
})
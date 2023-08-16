describe('CSS Challenge', () => {

  beforeEach(() => {
    cy.visit('/')
  })

  it('adds margin to box-with-margin class', () => {
    cy.get('.box-with-margin').should('have.css', 'margin', '30px')
  })
})
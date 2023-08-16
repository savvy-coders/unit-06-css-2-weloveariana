describe('CSS Challenge', () => {

    beforeEach(() => {
      cy.visit('/')
    })
  
    it('positions elements in grid areas', () => {
      cy.get('.header').should('have.css','grid-area',  'header / header / header / header')
      cy.get('.sidebar').should('have.css','grid-area', 'sidebar / sidebar / sidebar / sidebar')
      cy.get('.main').should('have.css','grid-area', 'main / main / main / main') 
      cy.get('.footer').should('have.css','grid-area', 'footer / footer / footer / footer')
    })
  
})
describe('CSS Challenge', () => {

  beforeEach(() => {
    cy.visit('/')
  })

  it('sets box width, padding, and background color', () => {
    cy.get('.box')
      .should('have.css', 'width', '400px')
      .and('have.css', 'padding-top', '10px')
      .and('have.css', 'padding-bottom', '10px')  
      .and('have.css', 'background-color', 'rgb(173, 216, 230)')
  })

  it('sets box sizing to content-box', () => {
    cy.get('.box').should('have.css', 'box-sizing', 'content-box') 
  })

  it('adds margin to box-with-margin class', () => {
    cy.get('.box-with-margin').should('have.css', 'margin', '30px')
  })

  it('sets static element to relative', () => {
    cy.get('.static-element').should('have.css', 'position', 'relative')
  })

  it('moves relative element', () => {
    cy.get('.relative-element').should('have.css', 'left', '80px') 
  })

  it('sets absolute element position', () => {
    cy.get('.absolute-element')
      .should('have.css', 'position', 'relative')
      .and('have.css', 'top', '150px')
  })

  it('fixes element to bottom right', () => {
    cy.get('.fixed-element')
      .should('have.css', 'position', 'fixed')
      .and('have.css', 'bottom', '20px')
      .and('have.css', 'right', '20px')
  })

  it('floats columns right', () => {
    cy.get('.column').should('have.css', 'float', 'right')
  })

  it('sets inline flex on container', () => {
    cy.get('.container').should('have.css', 'display', 'inline-flex')
  })

  it('sets width and margin on items', () => {
    cy.get('.item')
      .should('have.css', 'width', '200px')
      .and('have.css', 'margin-right', '20px')
  })

  it('creates grid layout', () => {
    cy.get('.grid-container')
      .should('have.css', 'grid-template-columns', '223.891px 223.891px 223.891px 223.891px 0px 88.4375px')
      .and('have.css', 'grid-template-rows', '100px 100px 100px 0px 18px')
  })
  
  it('positions elements in grid areas', () => {
    cy.get('.header').should('have.css','grid-area',  'header / header / header / header')
    cy.get('.sidebar').should('have.css','grid-area', 'sidebar / sidebar / sidebar / sidebar')
    cy.get('.main').should('have.css','grid-area', 'main / main / main / main') 
    cy.get('.footer').should('have.css','grid-area', 'footer / footer / footer / footer')
  })

})
describe('Test like there is no tomorrow', () => {

  beforeEach(() => {
    
    cy.visit('/')
  })
  
  it('Focus the new post on load', () => {
    
    cy.focused()
      .should('have.class', 'new-post-textarea')
  })

  it('Input should have same value as the one typed', () => {
    
    cy.get('.new-post-textarea')
      .type('medJS')
      .should('have.value', 'medJS')
  })
})

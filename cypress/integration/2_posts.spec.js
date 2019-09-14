describe('Test like there is no tomorrow', () => {

  it('Input should have same value as the one typed', () => {
    
    cy.visit('/')
    cy.get('.posts-list .post')
      .should('have.length', 1)
  })
})

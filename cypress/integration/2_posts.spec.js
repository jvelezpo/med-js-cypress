describe('Test like there is no tomorrow', () => {

  it('Input should have same value as the one typed', () => {
    
    cy.server()
    cy.route('GET', '/api/posts*', [
      {
        "post": "medJS",
        "likes": 3,
        "id": 1 }
    ]).as('load')

    cy.visit('/')
    cy.wait('@load')
    
    cy.get('.posts-list .post')
      .should('have.length', 1)

    cy.get('.total-posts')
      .should('have.text', '1')

    cy.get('.total-posts-likes')
      .should('have.text', '3')
  })
})

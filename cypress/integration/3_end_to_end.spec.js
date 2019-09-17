describe('end to end test', () => {
  
  it('add a new post', () => {

    cy.server()
    cy.route('POST', '/api/posts').as('save')

    cy.visit('/')

    cy.get('.new-post-textarea')
      .type('end to end testing')
    
    cy.get('.add-btn')
      .click()
    cy.wait('@save')

    cy.get('.posts-list .post')
      .should('have.length', 1)
  })
})
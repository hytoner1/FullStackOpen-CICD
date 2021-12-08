describe('Anecdotes', function () {
  it('front page can be opened', function () {
    cy.visit('http://localhost:8000')
    cy.contains('Anecdotes')
    cy.contains('Votes')
  })
})
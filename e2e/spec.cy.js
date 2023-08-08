describe('template spec', () => {
  it('valid login', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get ('#user-name').type ('standard_user')
    cy.get ('#password').type ('secret_sauce')
    cy.get ('submit-button').click();
    cy.get ('body')





    
  })
})
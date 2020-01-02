const emailField = 'input[name="email"]'
const passwordField = 'input[name="password"]'

class loginPage {
  static visit() {
    cy.visit('/')
  }

  static typeEmailField(query) {
    cy.get(emailField).type(query)
  }
  static typePasswordField(query) {
    cy.get(passwordField).type(query)
  }
  static pressSubmit() {
    cy.get('button')
      .contains(/login/i)
      .click()
  }
  static redirect() {
    cy.wait(500)
    cy.visit('/in')
  }
  static getBoxUser(user) {
    cy.contains(user)
      .click()
      .wait(50)
  }
  static assertUser(user) {
    cy.get('[role="tooltip"]').should('be.visible')
    cy.get('.text-right').should('contain', user)
  }
}

export default loginPage

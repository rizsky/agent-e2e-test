import { Given, Then, When } from 'cypress-cucumber-preprocessor/steps'
import loginPage from '../../pages/login/login-page'

const data = require('../../data/login/login')

Given(/^user in login page$/, () => {
  cy.visit('/')
})
When(/^user type valid email$/, () => {
  loginPage.typeEmailField(data.emailSuperAdmin)
})
When(/^user type valid password$/, () => {
  loginPage.typePasswordField(data.passwordSuperAdmin)
})
When(/^Press submit$/, () => {
  loginPage.pressSubmit()
  loginPage.redirect()
})
Then(/^user redirected to agent cms as 'super admin'$/, () => {
  loginPage.getBoxUser(data.emailSuperAdmin)
  loginPage.assertUser('super')
})

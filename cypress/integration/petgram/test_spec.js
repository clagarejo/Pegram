/* global describe, it, cy */

describe('Petgram', function () {
  it('Para ver si la app funciona', function (params) {
    cy.visit('/')
  })

  it('navegamos a una categoria y vemos fotos', function (params) {
    cy.visit('/pet/1')
    cy.gey('article')
  })

  it('si podemos navegar con la navbar a la home', function (params) {
    cy.visit('/pet/1')
    cy.get('nav a').first().click()
    cy.url().should('include', '/')
  })

  it('los usuarios no registrados ven el formulario de registro e inicio de sesion', function (params) {
    cy.visit('/favs')
    cy.get('form').should('have.length', 2)
  })
})

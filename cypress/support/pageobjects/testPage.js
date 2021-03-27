/// <reference types="cypress" />

import testElements from '../Elementos/testElements'
const Elements = new testElements
const NavegadorUrl = Cypress.config("baseUrl")


class TestPage{

abrirUrl(){
    cy.visit(NavegadorUrl)
}

preenchercampoprimeironome(){
    cy.get(Elements.CampoprimeiroNome()).type("Laércio ")
}

clicarbotãoRefresh(){
    cy.get(Elements.botãorefresh()).click()
}

validartelalimpa(){
    cy.screenshot()
}

}

export default TestPage;
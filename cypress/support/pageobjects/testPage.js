/// <reference types="cypress" />

import testElements from '../Elementos/testElements'
const Elements = new testElements
const NavegadorUrl = Cypress.config("baseUrl")


class TestPage{

abrirUrl(){
    cy.visit(NavegadorUrl)
}

preenchercampoprimeironome(){
    cy.get(Elements.FirstName()).type("Laércio ")
}

preenchercamposegundonome(){
    cy.get(Elements.LastName()).first().type("Gonçalves de Andrade")
}

preencherendereço(){
    cy.get(Elements.Address()).type("Avenida Paulista n100")
}

preencheremail(){
    cy.get(Elements.Email()).type("laercioteste@hotmail.com")
}

preenchertelefone(){
    cy.get(Elements.Phone()).type("9953791990")
}

selecionarsexo(){
    cy.get(Elements.Gender()).click()
}

seleionarHobbies(){
    cy.get(Elements.Hobbies1()).click()
    cy.get(Elements.Hobbies2()).click()
    cy.get(Elements.Hobbies3()).click()
}

selecionarlanguage(){
    cy.get(Elements.ClickLanguage()).click()
    cy.get(Elements.SelectLanguage()).contains('Portuguese').click()
    
}

selecionarskills(){
    cy.get(Elements.exitmenu()).click()
    cy.get(Elements.Skills()).select('Java')
}

selecionarpaís(){
    cy.get(Elements.Country()).select('Brazil')    
}

selecionarcontinente(){
    cy.get(Elements.ClickCountry()).click()
    cy.get(Elements.SelectCountry()).click()
}

selecionarano(){
    cy.get(Elements.Year()).select('1997')
}

selecionarmes(){
    cy.get(Elements.Month()).select('June')
}

selecionardia(){
    cy.get(Elements.Day()).select('21')
}

password(){
    cy.get(Elements.Password()).type('Teste123')
}

confirmpassword(){
    cy.get(Elements.Confirmpassword()).type('Teste123')
}

clicarbotãosubmit(){
    cy.get(Elements.Buttonsubmit()).click()
}

clicarbotãoRefresh(){
    cy.get(Elements.buttonrefresh()).click()
}

validartelalimpa(){
    cy.screenshot()
}

validartelapreechida(){
    cy.screenshot()
}

}

export default TestPage;
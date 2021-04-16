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
    cy.get(Elements.Phone()).type("0123456789")
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
    
    //cy.get(Elements.Language()).select('Portugues')
}

selecionarskills(){
    cy.wait(500)
    cy.get(Elements.Skills()).select('Java', {force: true})
}

selecionarpaís(){
    cy.get(Elements.Country()).select('Brazil')    
}

selecionarcontinente(){
    cy.get(Elements.SelectCountry()).select('United States of America',  {force: true })
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
    cy.screenshot()
}

clicarbotãoRefresh(){
    cy.get(Elements.buttonrefresh()).click()
}

validartelalimpa(){
    cy.screenshot()
}

}

export default TestPage;
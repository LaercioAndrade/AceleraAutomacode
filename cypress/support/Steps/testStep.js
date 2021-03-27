/*global Given, Then, When*/

import testPage from '../pageobjects/testPage'
const Pagina = new testPage



  Given("que eu acesso o site Demo Automation", () => {
        Pagina.abrirUrl();
  }),

  When("preencho o campo FirstName", () => {
        Pagina.preenchercampoprimeironome();
  }),

  And("clico no botão refresh", () => { 
        Pagina.clicarbotãoRefresh();
  }),

  Then("valido se o campo FirstName nãou possui dados", () => {
        Pagina.validartelalimpa()
  })
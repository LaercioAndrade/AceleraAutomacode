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

  // Preencher todos os dados
  When("preencho todos os dados", () => {
      Pagina.preenchercampoprimeironome();
      Pagina.preenchercamposegundonome();
      Pagina.preencherendereço();
      Pagina.preencheremail();
      Pagina.preenchertelefone();
      Pagina.selecionarsexo();
      Pagina.seleionarHobbies();
      Pagina.selecionarlanguage();
      Pagina.selecionarskills();
      Pagina.selecionarpaís();
      Pagina.selecionarcontinente();
      Pagina.selecionarano();
      Pagina.selecionarmes();
      Pagina.selecionardia();
      Pagina.password();
      Pagina.confirmpassword();
  })

  And("clico em submit", () => {
      Pagina.clicarbotãosubmit();
  })

  Then("valido a tela do Site", () => {
      Pagina.validartelapreechida();
  })

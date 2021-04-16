Feature: Automatizar site teste

  Scenario: Preencher campo FirstName
    Given que eu acesso o site Demo Automation
    When  preencho o campo FirstName
    And   clico no botão refresh
    Then  valido se o campo FirstName nãou possui dados


  Scenario: Preencher todos os campos doFormulário
      Given que eu acesso o site Demo Automation
      When preencho todos os dados
      And  clico em submit
      Then valido a tela do Site

Feature: Automatizar site teste

  Scenario: Preencher campo FirstName
    Given que eu acesso o site Demo Automation
    When  preencho o campo FirstName
    And   clico no botão refresh
    Then  valido se o campo FirstName nãou possui dados

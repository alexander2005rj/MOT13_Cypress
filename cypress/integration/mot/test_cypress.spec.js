/// <reference types="Cypress" />
 
 
 
 
describe('Praticando automação com Cypress', () => {
 
    it('Criando um cadastro', () => {
  
        // Acessando o site
        cy.visit('http://automationpractice.com/index.php');
       
        // Clicando no link Sign In
        cy.get('.login').click();
  
        // Inserindo um e-mail válido
        cy.get('#email_create').type('teste_automacao_cypress' + Math.floor(Math.random() * 10) + '@mailinator.com');
  
        // Clicando no botão Create an account
        cy.get('#SubmitCreate > span').click();
  
        // Clicando no radiobutton Mr.
        cy.get('#id_gender1').click();
  
        // Informando First Name
        cy.get('#customer_firstname').type('Fulano');
  
        // Informando Last Name
        cy.get('#customer_lastname').type('De Tal');
  
        // Informando Password
        cy.get('#passwd').type('Abcd1234');
  
        // Selecionando Date of Birth
        cy.get('#days').select('28');
        cy.get('#months').select('August');
        cy.get('#years').select('1980');
  
        // Selecionando o checkbox Sign up for our newsletter!
        cy.get('#newsletter').click();
  
        // Selecionando o checkbox Receive special offers from our partners!
        cy.get('#optin').click();
  
        // Informando Company
        cy.get('#company').type('Ministry Of Testing');
  
        // Informando Address
        cy.get('#address1').type('Rua do Teste, 1234');
  
        // Informando City
        cy.get('#city').type('Rio de Janeiro');
  
        // Selecionando State
        cy.get('#id_state').select('Hawaii');
  
        // Informando Zip/Postal Code
        cy.get('#postcode').type('13579');
  
        // Informando Additional information
        cy.get('#other').type('Sou uma pessoa começando com automação. Por favor, tenha paciência com meu código. Um dia vou melhorá-lo. Prometo!');
  
        // Informando Mobile phone
        cy.get('#phone_mobile').type('98765-4321');
  
        // Limpando o valor exibido no campo Assign an address alias for future reference.
        cy.get('#alias').clear();
  
        // Informando um valor novo no campo Assign an address alias for future reference.
        cy.get('#alias').type('MOT#13');
  
        // Clicando no botão REGISTER >
        cy.get('#submitAccount > span').click();
  
  
    });
  
  
 });
 
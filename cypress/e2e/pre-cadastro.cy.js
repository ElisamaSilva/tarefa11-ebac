/// <reference types="Cypress" />

describe('Funcionalidade Pré Cadastro', () => {
    
  beforeEach(() => {
      cy.visit ('http://lojaebac.ebaconline.art.br/minha-conta/')
  });
  
  it('Deve completar o Pré Cadastro com sucesso', () => {
      //VARIAVEIS PARA OS NOMES FAKERS
      let nomeFaker = faker.name.firstName()
      let sobrenomeFaker = faker.name.lastName()
      let emailFaker = faker.internet.email()
  
      cy.get ('#reg_email').type (emailFaker)
      cy.get ('#reg_password').type ('!teste@teste$')
      cy.get(':nth-child(4) > .button').click()
      
       
      cy.get('#woocommerce-MyAccount-navigation-link--edit-account > a').click()
      cy.get ('#account_firt_name').type(nomeFaker)
      cy.get ('#account_last_name').type(sobrenomeFaker)
      cy.get ('woocommerce-Button').click()
  
      cy.get ('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso') 
     
  });
  
  });
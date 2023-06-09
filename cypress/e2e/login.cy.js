/// <reference types="Cypress" />

context('Funcionalidade Login', () => {

//ANTES DE CADA TESTES 
beforeEach(() => {
    cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/') 
});

afterEach(() => {
    cy.screenshot ()
});

    it('Deve fazer login com sucesso', () => {

        cy.get ('#username').type ('aluno_ebac@teste.com')
        cy.get ('#password').type ('teste@teste.com')
        cy.get ('#woocommerce-form > .button').click()

        cy.get ('.page-title').should('contain', 'Minha conta') 
    });

    it('Deve exibir uma mensagem de erro ao inserir usuario inválido', () => {  
        cy.get ('#username').type ('aluno_ebackk@teste.com')
        cy.get ('#password').type ('teste@teste.com')
        cy.get ('#woocommerce-form > .button').click()    
        
        cy.get ('.woocommerce-error').should('contain', 'Endereço de email desconhecido')  
    });

    it('Deve exibir uma mensagem de erro ao inserir senha inválida', () => {  
        cy.get ('#username').type ('aluno_ebac@teste.com')
        cy.get ('#password').type ('testeeew@teste.com')
        cy.get ('#woocommerce-form > .button').click()      

        cy.get ('.woocommerce-error').should('contain', 'Endereço de email desconhecido') 
    });

});
describe('Funcionalidade Página de Produtos', () => {
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
    });

    it('Deve adiconar produtos ao carrinho', () => {
        //Adiciona Produtos
        cy.addProdutos('Atlas Fitness Tank', 4)
        cy.get('.woocommerce-message > .button').click()
        cy.get('.checkout-button').click()

        // Preenche as opções no checkout
        cy.get('.showlogin').click()
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-button').click()
        cy.get('#terms').click()
        cy.get('#place_order').click()

        // Valida a compra
        cy.get('.woocommerce-notice').should('contain', 'Obrigado. Seu pedido foi recebido.');
    });

});
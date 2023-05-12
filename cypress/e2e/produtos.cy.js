/// <reference types="cypress" />

describe('Funcionalidade Página de Produtos', () => {
  beforeEach(() => {
      cy.visit ('http://lojaebac.ebaconline.art.br/produtos/')
  });
  
      it('Deve selecionar um produto da lista', () =>{
          cy.get('[class= "product-block grid"]')
              /* CASO QUEIRA PEGAR O PRIMEIRO ITEM DA LISTA
              .first()
              CASO QUEIRA PEGAR O TERCEIRO ITEM DA LISTA
              .eq(3)
              CASO QUEIRA PEGAR O PRIMEIRO ITEM DA LISTA
              .last()
              CASO QUEIRA PEGAR UM PRODUTO PELO NOME */
          .contains('Ariel Roll Sleeve Sweatshirt')
          .click()
      });
      it.only('Deve adicionar um Produto ao carrinho', () => {
          //ATRIBUINDO QUALQUER VALOR A VARIAVEL (quantidade)
          var quantidade = 3
          cy.get('[class= "product-block grid"]')
              .contains('Ariel Roll Sleeve Sweatshirt').click()
          cy.get('.button-variable-item-M').click()
          cy.get('.button-variable-item-Purple').click()
          cy.get('.input-text').clear().type(quantidade)
          cy.get('.single_add_to_cart_button').click()
  
          cy.get('.dropdown-toggle > -mini-cart-items').should('contain', quantidade)
          //CONCATENANDO A STRING (quantidade)
          cy.get('woocommerce-message').should('contain', quantidade + 'x "Ariel Roll Sleeve Sweatshirt" foram adicionadas no seu carrinho.')
  
      // TESTAR UMA DETERMINADA QUANTIDADE, NO CASO ABAIXO A QUANTIDADE FOI= 2
      //    cy.get('[class= "product-block grid"]')
      //         .contains('Ariel Roll Sleeve Sweatshirt').click()
      //     cy.get('.button-variable-item-M').click()
      //     cy.get('.button-variable-item-Purple').click()
      //     cy.get('.input-text').clear().type(2)
      //     cy.get('.single_add_to_cart_button').click()
      //     cy.get('.dropdown-toggle > -mini-cart-items').should('contain', 2)
      //     cy.get ('woocommerce-message').should('contain', '2 x "Ariel Roll Sleeve Sweatshirt"')
      
      });
  
  });
import EnderecoPage from '../support/page-objects/endereco.page'

describe('Endereços - Faturamento e Entrega', () => {
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.login('aluno_ebac@teste.com', 'teste@teste.com')
    });

    it('Deve fazer cadastro de Faturamento', () => {
        EnderecoPage.editarEnderecoFaturamento('Elisama', 'Silva', 'FADESP', 'Brasil', 'Rua das Palmeiras', '2020', 'Belem', 'Pará', '66000001', '912345678', 'elisama@teste.com')
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')

    });
});

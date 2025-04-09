describe ('Página de Cadastro', () => {
    it ('Garantir mensagem de erro ao tentar realizar o cadastro sem preencher o formulário', () => {
        
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
        cy.get('[data-test="register-button"]').click();
        cy.get('[data-test="submit-button"]').click();
        cy.contains('É necessário informar um endereço de email').should('be.visible'); // essa mensagem deve estar visivel
        cy.contains('Crie uma senha').should('be.visible');
        cy.contains('Repita a senha criada acima').should('be.visible');
    });
});

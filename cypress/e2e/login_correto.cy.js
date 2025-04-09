describe ('Página de login', () => {
    beforeEach(() => { 
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
        cy.get('[data-test="login-button"]').click();
    });

    it ('Garantir o correto comportamento de autenticação do usuário com sucesso', () => {
        
        cy.login('mariana@email.com', 'Senha123');
    });
})
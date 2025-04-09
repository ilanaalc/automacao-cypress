describe('Login Adopet', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app');
        cy.get('[data-test="login-button"]').click();
        cy.intercept('POST', 'https://adopet-api-i8qu.onrender.com/adotante/login', {
            statusCode: 400, 
        }).as('stubPost')
    })
    
    it ('Garantir mensagem de erro no login com dados inválidos', () => {

        cy.login('12', 'senha');
        cy.get('[data-test="submit-button"]').click();
        cy.contains('Por favor, verifique o email digitado').should('be.visible');
        cy.contains('A senha deve conter pelo menos uma letra maiúscula, um número e ter entre 6 e 15 caracteres').should('be.visible');
    })

    it ('Garantir mensagem de erro no login com dados não registrados', () => {

        cy.login('mariana@email.com', 'Senha123');
        cy.wait('@stubPost', {timeout: 10000});
        cy.contains('Falha no login. Consulte suas credenciais.').should('be.visible');
    })

    it ('Garantir mensagem de erro no login quando os dados não forem preenchidos', () => {

        cy.get('[data-test="submit-button"]').click();
        cy.contains('É necessário informar um endereço de email').should('be.visible');
        cy.contains('Insira sua senha').should('be.visible');
    })
})
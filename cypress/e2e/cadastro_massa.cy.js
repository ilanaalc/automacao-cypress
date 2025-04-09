import {usuarios} from '../fixtures/usuario.json'

describe ('Página de cadastro', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app');
        cy.get('[data-test="register-button"]').click();
    })
    usuarios.forEach(usuarios => {
        it('Garantir o correto comportamento de cadastro de um novo usuário com sucesso utilizando a massa de teste', () => {
            cy.get('[data-test="input-name"]').clear().type(usuarios.name);
            cy.get('[data-test="input-email"]').clear().type(usuarios.email);
            cy.get('[data-test="input-password"]').clear().type(usuarios.password);
            cy.get('[data-test="input-confirm-password"]').clear().type(usuarios.password);
            cy.get('[data-test="submit-button"]').click();
        })
    })
})
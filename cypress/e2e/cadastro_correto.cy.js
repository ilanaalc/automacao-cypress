describe('Validação da página Adopet', () => {
  beforeEach(() => { //antes de cada caso de teste(it)
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('[data-test="register-button"]').click();
});

  it('Garantir o correto comportamento de cadastro de um novo usuário com sucesso', () => {

    cy.cadastro('Mariana de Jesus', 'mariana@email.com', 'Senha123', 'Senha123')
  });

  it('Garantir o correto acesso de visualização de pets disponíveis para adoção', () => {

    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.contains('a', 'Ver pets disponíveis para adoção').click();
  });

  it('Garantir o correto funcionamento dos botões da página inicial', () => {

    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('.header__message').click();
    cy.get('.header__home').click();
  });

  it('Garantir o correto acesso à página de login Adopet', () => {

    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.contains('a', 'Fazer login').click();
  });

  it('Garantir o correto acesso à página home Adopet', () => {

    cy.visit('https://adopet-frontend-cypress.vercel.app/home');
  });

  it('Garantir o correto acesso à página home Adopet e falar com o responsável', () => {
    
    cy.visit('https://adopet-frontend-cypress.vercel.app/home');
    cy.get('.header__message').click();
  });
})
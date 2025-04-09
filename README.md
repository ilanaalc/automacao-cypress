# Automatização de Testes no Site Adopet com Cypress

## Descrição do projeto 

<p align="justify">
Este projeto foi desenvolvido com base no curso "Cypress: Automatizando Testes E2E" da Alura e tem como objetivo automatizar os testes das funcionalidades no site **Adopet**, voltado ao cadastramento de usuários para adoção de pets. Com o uso do **Cypress**, foram criados cenários de testes positivos e negativos para garantir que o processo de **cadastro** e **login** funcionasse de forma eficaz e segura, garantindo uma experiência de usuário sem erros.

O projeto abrange testes automatizados em **fluxos de cadastro de usuários e login**, fundamentais para a operação do site. O objetivo principal é fornecer maior confiança na qualidade do sistema e reduzir o tempo necessário para detectar regressões e falhas.

</p>

## Principais Cenários de Testes 

### 1. Cadastro de Usuário - Cenário Sucesso
**Objetivo:** Garantir o correto comportamento de acesso à página de cadastro de um novo usuário com sucesso Adopet <p>
**Dado** que ao acessar a página inicial do site Adopet <p>
**Quando** clicar na opção de cadastramento de usuário <p>
**Então** o sistema deverá direcionar o usuário para a tela de cadastro <p>

--------------------------------------------------------------------------------------------------------------------------------------------------------------

### 2. Cadastro de Usuário - Cenário Sucesso
**Objetivo:** Garantir o correto comportamento de cadastro de um novo usuário com sucesso <p>
**Dado** que ao acessar a página de cadastro do site Adopet <p>
**Quando** preencher todos os campos de cadastro solicitados com dados válidos <p>
**E** clicar para cadastrar <p>
**Então** o sistema deverá realizar o cadastro do novo usuário com sucesso <p>

--------------------------------------------------------------------------------------------------------------------------------------------------------------

### 3. Cadastro de Usuário - Cenário Sucesso
**Objetivo:** Garantir o correto acesso de visualização de pets disponíveis para adoção <p>
**Dado** que ao acessar a página inicial do site Adopet <p>
**Quando** clicar para visualizar os pets disponíveis para adoção <p>
**Então** o sistema deverá exibir os dados cadastrados dos pets para adoção <p>

--------------------------------------------------------------------------------------------------------------------------------------------------------------

### 4. Cadastro de Usuário - Cenário Negativo:
**Objetivo:** Garantir mensagem de erro ao tentar realizar o cadastro sem preencher o formulário <p>
**Dado** que ao acessar a página de cadastro de usuário do site Adopet <p>
**Quando** não preencher o formulário com os dados solicitados <p>
**E** clicar para cadastrar <p>
**Então** o sistema deverá exibir uma mensagem de erro ao usuário solicitando o preenchimento dos campos <p>

--------------------------------------------------------------------------------------------------------------------------------------------------------------

### 5. Login de Usuário - Cenário Sucesso
**Objetivo:** Garantir o correto comportamento de autenticação do usuário com sucesso <p>
**Dado** que ao acessar a página de login do site Adopet <p>
**Quando** preencher os campos de e-mail e senha com dados cadastrados <p>
**Então** o sistema deverá realizar a autenticação do usuário com sucesso <p>

--------------------------------------------------------------------------------------------------------------------------------------------------------------

### 6. Login de Usuário - Cenário Negativo
**Objetivo:** Garantir mensagem de erro no login quando os dados não forem preenchidos<p>
*Dado* que ao acessar a página de login do site Adopet <p>
*Quando* não preencher os campos de e-mail e senha <p>
*E* clicar para realizar o login <p>
*Então* o sistema deverá exibir uma mensagem de erro ao usuário solicitando o preenchimento dos dados para login <p>

--------------------------------------------------------------------------------------------------------------------------------------------------------------

### 7. Login de Usuário - Cenário Negativo
**Objetivo:** Garantir mensagem de erro no login com dados não registrados <p>
*Dado* que ao acessar a página de login do site Adopet <p>
*Quando* preencher os campos de e-mail e senha com dados não registrados no sistema <p>
*E* clicar para realizar o login <p>
*Então* o sistema deverá exibir uma mensagem de erro ao usuário informando falha no login para a revisão das credenciais de acesso <p>

--------------------------------------------------------------------------------------------------------------------------------------------------------------

### 8. Login de Usuário - Cenário Negativo
**Objetivo:** Garantir mensagem de erro no login com dados inválidos <p>
*Dado* que ao acessar a página de login do site Adopet <p>
*Quando* preencher os campos de e-mail e senha com dados inválidos <p>
*E* clicar para realizar o login <p>
*Então* o sistema deverá exibir uma mensagem de erro ao usuário solicitando a verificação dos dados preenchidos <p>


## Ferramentas Utilizadas
<p> ▫️ Visual Studio Code

## Frameworks Utilizados
<p> ▫️ Cypress 
<p> ▫️ Mocha para relatórios 

## Linguagem de Programação
<p> ▫️ JavaScript 


## Autores do Projeto
<p>👩🏽‍💻 Ilana Alcantara
<p>💻 [GitHub](https://github.com/ilanaalc)
<p> 🔹[LinkedIn}(https://www.linkedin.com/in/ilana-alcantara/)


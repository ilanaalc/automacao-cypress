# Automação de Testes da Página Adopet com Cypress

## Descrição do projeto 

<p align="justify">
Este projeto foi construído com base nos conhecimentos adquiridos do curso "Cypress: automatizando testes E2E" da escola de tecnologia Alura e tem como principal objetivo utilizar os recursos do Cypress para a automatização de testes da página Adopet, um site voltado ao cadastramento do usuário para o programa de adoção de pets. Visto isso, foi realizado o mapeamento dos cenários de testes positivos e negativos de cadastro e login de usuário para o desenvolvimento dos scripts de testes.

</p>

## Principais Cenários de Testes 

:heavy_check_mark: `Cadastro de Usuário - Cenário Sucesso:` Garantir o correto comportamento de acesso à página de cadastro de um novo usuário com sucesso Adopet <p>
*Dado* que ao acessar a página inicial do site Adopet <p>
*Quando* clicar na opção de cadastramento de usuário <p>
*Então* o sistema deverá direcionar o usuário para a tela de cadastro <p>

--------------------------------------------------------------------------------------------------------------------------------------------------------------

:heavy_check_mark: `Cadastro de Usuário - Cenário Sucesso:` Garantir o correto comportamento de cadastro de um novo usuário com sucesso <p>
*Dado* que ao acessar a página de cadastro do site Adopet <p>
*Quando* preencher todos os campos de cadastro solicitados com dados válidos <p>
*E* clicar para cadastrar <p>
*Então* o sistema deverá realizar o cadastro do novo usuário com sucesso <p>

--------------------------------------------------------------------------------------------------------------------------------------------------------------

:heavy_check_mark: `Cadastro de Usuário - Cenário Sucesso:` Garantir o correto acesso de visualização de pets disponíveis para adoção <p>
*Dado* que ao acessar a página inicial do site Adopet <p>
*Quando* clicar para visualizar os pets disponíveis para adoção <p>
*Então* o sistema deverá exibir os dados cadastrados dos pets para adoção <p>

--------------------------------------------------------------------------------------------------------------------------------------------------------------

:heavy_check_mark: `Cadastro de Usuário - Cenário Negativo:` Garantir mensagem de erro ao tentar realizar o cadastro sem preencher o formulário <p>
*Dado* que ao acessar a página de cadastro de usuário do site Adopet <p>
*Quando* não preencher o formulário com os dados solicitados <p>
*E* clicar para cadastrar <p>
*Então* o sistema deverá exibir uma mensagem de erro ao usuário solicitando o preenchimento dos campos <p>

--------------------------------------------------------------------------------------------------------------------------------------------------------------

:heavy_check_mark: `Login de Usuário - Cenário Sucesso:` Garantir o correto comportamento de autenticação do usuário com sucesso <p>
*Dado* que ao acessar a página de login do site Adopet <p>
*Quando* preencher os campos de e-mail e senha com dados cadastrados <p>
*Então* o sistema deverá realizar a autenticação do usuário com sucesso <p>

--------------------------------------------------------------------------------------------------------------------------------------------------------------

:heavy_check_mark: `Login de Usuário - Cenário Negativo:`Garantir mensagem de erro no login quando os dados não forem preenchidos<p>
*Dado* que ao acessar a página de login do site Adopet <p>
*Quando* não preencher os campos de e-mail e senha <p>
*E* clicar para realizar o login <p>
*Então* o sistema deverá exibir uma mensagem de erro ao usuário solicitando o preenchimento dos dados para login <p>

--------------------------------------------------------------------------------------------------------------------------------------------------------------

:heavy_check_mark: `Login de Usuário - Cenário Negativo:` Garantir mensagem de erro no login com dados não registrados <p>
*Dado* que ao acessar a página de login do site Adopet <p>
*Quando* preencher os campos de e-mail e senha com dados não registrados no sistema <p>
*E* clicar para realizar o login <p>
*Então* o sistema deverá exibir uma mensagem de erro ao usuário informando falha no login para a revisão das credenciais de acesso <p>

--------------------------------------------------------------------------------------------------------------------------------------------------------------

:heavy_check_mark: `Login de Usuário - Cenário Negativo:` Garantir mensagem de erro no login com dados inválidos <p>
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


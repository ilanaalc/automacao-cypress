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
*Quando* preencher os campos de e-mail e senha com dados não cadastrados <p>
*E* clicar para realizar o login <p>
*Então* o sistema deverá exibir uma mensagem de erro ao usuário informando falha no login para a revisão das credenciais de acesso <p>

--------------------------------------------------------------------------------------------------------------------------------------------------------------

:heavy_check_mark: `Login de Usuário - Cenário Negativo:` Garantir mensagem de erro no login com dados inválidos <p>
*Dado* que ao acessar a página de login do site Adopet <p>
*Quando* preencher os campos de e-mail e senha com dados inválidos <p>
*E* clicar para realizar o login <p>
*Então* o sistema deverá exibir uma mensagem de erro ao usuário solicitando a verificação dos dados preenchidos <p>


## Ferramentas Utilizadas
<p> ▫️ Google Colab 
<p> ▫️ Gemini 
<p> ▫️ Google AI Studio 

## Linguagem de Programação
▫️ Python

## Orientações sobre como rodar o projeto utilizando a API Key do Google

❓ Como gerar a sua API Key?
1. Acesse o [Google AI Studio](https://aistudio.google.com/app/prompts/new_chat?);
2. Se não estiver logado na sua conta do Gmail, fazer o login com o seu Gmail;
3. Se já estiver logado na sua conta do Gmail, no menu lateral esquerdo, clique em "Get API key";
4. Agora clique em "Criar chave de API";
5. Após isso, será gerado automaticamente para você a sua API Key, que poderá estar sendo utilizada para rodar o projeto;

❓ Já tenho a API Key, como faço para configurá-la no Google Colab?
1. No Google Colab, acessando o menu lateral esquerdo, clique em "Secrets 🗝️"
2. Após isso, clique em "Adicionar novo secret";
3. Agora configure o nome como "SECRET_KEY" e adicione no campo "valor" o link da sua API Key;
4. Clique em "Acesso ao notebook" e pronto, agora a sua API Key já está configurada e você já pode começar a usá-lá.

▫ ️ Se tiver dúvidas ou quiser conversar mais sobre o projeto, fico à disposição para dicas e sugestões. Pode entrar em contato comigo pelas redes abaixo. Ficarei muito feliz em poder ajudar você.

## Autores do Projeto
<p>👩🏽‍💻 Ilana Alcantara
<p>💻 [GitHub](https://github.com/ilanaalc)
<p> 🔹[LinkedIn}(https://www.linkedin.com/in/ilana-alcantara/)


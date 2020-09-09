# Marvel Lacrei Api Versão 1.1 Beta

Este projeto foi criado utilizando:
* [Angular CLI](https://github.com/angular/angular-cli) version 10.1.0.
* [API Marvel](https://developer.marvel.com/).

Funcionalidades da Aplicação:
* Lista de personagens - Página inicial contendo a lista de personagens obtidas através da "API Marvel".
    * Conteúdo da Página:
        * Imagem dos personagens e seus respectivos nomes.
        * Botão Detalhes - Direciona a página de Perfil detalhado do personagem (Página obtida do site da Marvel).
    * Implementações Futuras:
        * Criação de um dialog com o perfil do personagem, contendo um botão para a página do perfil detalhado do site da Marvel.
        * Criação do menu para acesso a página de LogIn, LogOut e Cadastro de usuário

* Login: - **PÁGINA EM CONSTRUÇÃO**
    * Login com (email e senha) e conta do Google.

* Cadastro de usuário - **PÁGINA EM CONSTRUÇÃO**
    * Cadastro com (email e senha) e conta do Google.

* Recuperar Senha - **PÁGINA EM CONSTRUÇÃO**
    * Recuperar a senha através do e-mail.

* Perfil do Usuário - **Implementações Futuras**

## Development server

Run `ng serve` para o dev server. para `http://localhost:4200/`. O aplicativo ira automaticamente para a rota 'http://localhost:4200/characters'.

![GitHub Logo](src/assets/img/personagens.png)
Tela Principal Personagens.

Em 'http://localhost:4200/login'. O aplicativo ira direcionar para a tela de Login.

![GitHub Logo](src/assets/img/login.png)
Tela Login de Usuários.

Em 'http://localhost:4200/register'. O aplicativo ira direcionar para a tela de Cadastro de Usuários.

![GitHub Logo](src/assets/img/registro.png)
Tela Cadastro de Usuários.

Em 'http://localhost:4200/forgot-password'. O aplicativo ira direcionar para a tela de Recuperar senha.

![GitHub Logo](src/assets/img/recuperar-senha.png)
Tela Recuperar Senha.

## VERCEL

O mesmo podera ser executado através do Vercel

* Tela Principal - Personagens: 'https://marvel-lacrei.vercel.app/characters'.
* Tela de Login: 'https://marvel-lacrei.vercel.app/login'.
* Cadastro de Usuários: 'https://marvel-lacrei.vercel.app/register'.
* Cadastro de Usuários: 'https://marvel-lacrei.vercel.app/forgot-password'.

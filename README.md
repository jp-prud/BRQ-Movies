<h1 align="center">BRQ Movies 🎥</h1>

<p align="center">App criado para conhecer todas as novidades sobre cinema 🎞️</p>

## Sobre o App
- O aplicativo foi construído utilizando padrões de arquitetura limpa e modularizada, visando o projeto ser escalavel. [The Clean Architecture](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html)


## Downloads

- [Play Store](https://play.google.com/apps/internaltest/4701704331720763539).
- [GitHub](https://github.com/jp-prud/BRQ-Movies/releases/tag/1.0.0).

## Requisitos

O projeto foi visa atender os seguintes requisitos:

- Tela de Login:
   - A tela de login permite o acesso à aplicação com uma combinação específica de login/senha: user/123.
   - Foram implementadas validações de campos obrigatórios no login, incluindo a obrigatoriedade de uma senha numérica.

- Tela de Filmes:
   - A tela de filmes possui 2 abas, conforme o protótipo.

- Tela de Detalhes do Filme:
   - Existe a possibilidade de marcar filmes como favoritos, sendo essa funcionalidade um plus.
   - Exibe detalhes do filme como sinopse, popularidade, nota, data de lançamento e votos.

- Tratamento de Erros:
   - O aplicativo lida adequadamente com erros de indisponibilidade de internet ou erros na API.

## Entrega - Screenshots

| ![Page1](./.github/resources/Splash.png)  | ![Page2](./.github/resources/Home.png) | ![Page3](./.github/resources/Details.png) | ![Page4](./.github/resources/Favs.png) | ![Page5](./.github/resources/SignIn.png) |
|:---:|:---:|:---:|:---:|:---:|
| Splash Screen | Home | Details | Favs | SignIn |


## Implementação extra

- CI/CD
   - Pensando na escalabilidade do projeto, adicionei duas pipelines simples no projeto. Uma será disparada no momento da abertura de um PR para a branch principal, no qual irá validar o que foi desenvolvido. A segunda, é disparada manualmente através do painel e tem como objetivo gerar o build do projeto.

- Busca infinita
   - Para uma melhor otimização da projeto, a home sofreu uma alteração, onde busca-se a lista de filmes "paginada", obtendo os 20 primeiros items e, conforme navegação, obtem-se mais dados.

- Adicionar aos favoritos
   - Criou-se um componene flexível para adicionar o filme aos favoritos, este item pode ser usado em qualquer tela, desde que receba o `movieId`.

- Similares
   - Para exemplificar uma implementação nova, foi adicionada a seção de "similares" na página do filme.

## Arquitetura

Exemplificação do que foi desenvolvido a nível de arquitetura.

| ![Arquitetura](./.github/resources/Arquitetura.png) |
|:---:|
| Arquitetura |

## Testes

Visualização do coverage do dia 05/08

| ![Coverage](./.github/resources/Coverage.png) |
|:---:|
| Coverage |

Para visualizar os testes E2E, siga o link: [Testes E2E](https://imgur.com/iz2I10C)

## Bibliotecas Utilizadas

Durante o desenvolvimento do projeto, as seguintes bibliotecas foram utilizadas para aprimorar a funcionalidade e a aparência da aplicação:

| Biblioteca             | Justificativa |
| :--------------------- | :------------ |
| react-navigation    | O react-navigation é uma biblioteca popular para gerenciar a navegação em aplicativos React Native. Ela fornece um conjunto de componentes e APIs para implementar navegação entre telas, navegação em pilhas e abas, e navegação em gavetas, facilitando a criação de fluxos de navegação complexos. Sua escolha é ideal para criar uma experiência de usuário fluida e consistente, com suporte a transições animadas e gerenciamento de estado de navegação |
| react-native-mmkv   | O react-native-mmkv é uma biblioteca que oferece acesso rápido e eficiente para armazenamento de dados no dispositivo utilizando o MMKV (uma alternativa ao AsyncStorage padrão do React Native). Sua escolha pode se dar pela performance superior em comparação com outras opções de armazenamento local, especialmente para dados mais pesados. |
| shopify-restyle      | O restyle é uma biblioteca que oferece um sistema de design-first para estilização em React Native. Permite criar e reutilizar componentes estilizados de maneira consistente, promovendo uma padronização visual e facilitando a manutenção da interface do aplicativo. |
| zod                 | O zod é uma biblioteca de validação de esquema altamente eficiente e tipada, sendo uma escolha para garantir a integridade dos dados recebidos da API ou fornecidos pelos usuários. Com seu sistema de tipagem robusto, auxilia na prevenção de erros comuns de tipagem e validação de dados. |
| react-query         | O react-query é uma biblioteca moderna para gerenciamento de estado e caching de dados, útil para aplicativos que dependem fortemente de dados externos, como a API "The Movie DB". Sua escolha pode estar relacionada à facilidade de fazer requisições, manipular e armazenar em cache os dados de forma eficiente. |
| react-hook-form     | Esta biblioteca é escolhida por simplificar a lógica de formulários no React Native. Oferece um conjunto de hooks que facilitam a validação, manipulação e envio de dados de formulários, reduzindo a complexidade do código e melhorando a manutenção. |
| react-native-mmkv   | O react-native-mmk é uma eficiente e produtiva biblioteca que oferece uma interface simples e flexível para manipulações do storage do dispositivo. |
| axios               | O axios é uma escolha comum para fazer requisições HTTP no React Native. Oferece uma interface simples e flexível para realizar chamadas de API, com suporte a interceptores, facilitando o tratamento de erros, manipulação de requisições e respostas, além de integração bem estabelecida com o ecossistema do React Native. |

## Instalação

Para realizar a instalação do projeto, siga os passos abaixo:

```bash
# Baixe este repositório ou clone pelo Git usando o comando:
$ git clone https://github.com/jp-prud/BRQ-Movies

# Acesse a pasta do projeto
$ cd BRQ-Movies

# instale as dependencias
$ yarn install
      ou
$ npm install

# Inicie o Projeto
$ yarn start
      ou
$ npm run start
```

## Arquivo .env

Antes de executar o projeto, você precisará criar um arquivo .env na raiz do projeto com as seguintes variáveis de ambiente:

```
ENV = "development",
API_URL = URL_DA_API_MOVIE_DB
API_KEY = CHAVE_DA_API_MOVIE_DB
API_IMAGE_URL = PATH_IMAGE
API_ACCOUNT_ID = TOKEN_DA_API_MOVIE_DB
ADMIN_USERNAME = SEU_ADMIN_USERNAME -> BRQ: "user"
ADMIN_PASSWORD = SUA_ADMIN_PASSWORD -> BRQ: "123"
```


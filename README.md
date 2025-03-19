# @felipe-rossato/ui-library

## 📌 Descrição

Este repositório contém:

### 📂 `library`
Uma biblioteca de componentes de UI, desenvolvida com WebComponents. Também inclui componentes de demonstração utilizando o Storybook.

### 📂 `demo`
Três aplicações em diferentes frameworks: React, Vue e Angular. Cada uma delas importa e renderiza os componentes da biblioteca para demonstração.

---

## 🚀 1) Biblioteca (`library`)

### 🔧 Rodando localmente

#### 📋 Pré-requisitos

- [NPM](https://www.npmjs.com/)
- [Node.js](https://nodejs.org/en/) >= v22.14.0

#### 📥 Instalação

```bash
# Navegue até a pasta /library
$ cd library/

# Instale as dependências
$ nvm use && npm install

# Inicie o projeto
$ npm run start
```

Os componentes poderão ser visualizados e modificados em tempo real acessando [`http://localhost:3000/`](http://localhost:3000/).

### 📖 Storybook

Para rodar o Storybook:

```bash
$ npm run storybook
```

A interface estará disponível em [`http://localhost:6006/`](http://localhost:6006/).

### 📦 Publicação da Biblioteca

O deploy da biblioteca utiliza um token do NPM. Para obtê-lo, entre em contato com o administrador do projeto e adicione-o ao arquivo `.npmrc`. Em seguida, execute:

```bash
$ npm run release
```

Se nenhum erro ocorrer, a nova versão estará disponível em: [@felipe-rossato/ui-library](https://www.npmjs.com/package/@felipe-rossato/ui-library).

### 🌍 Deploy do Storybook

O Storybook está hospedado no [Netlify](https://www.netlify.com/) e utiliza um token para realizar o deploy. Para configurá-lo, adicione o token ao arquivo `.env` e execute:

```bash
# Instale a CLI do Netlify
$ npm install netlify-cli -g

# Realize o deploy do Storybook
$ npm run deploy-storybook
```

Se tudo correr bem, ele estará disponível em: [Storybook Deploy](https://whimsical-paprenjak-fa02fe.netlify.app).

---

## 🎬 2) Demonstração (`demo`)

### 🔧 Rodando localmente

#### 📋 Pré-requisitos

- [NPM](https://www.npmjs.com/)
- [Node.js](https://nodejs.org/en/) >= v22.14.0

#### 📥 Instalação

A gestão das três demonstrações é feita com [Lerna](https://lerna.js.org/), permitindo instalação e execução simultânea:

```bash
# Navegue até a pasta /demo
$ cd demo/

# Instale as dependências
$ nvm use && npm install

# Inicie os projetos
$ npx lerna run start --stream --no-bail
```

Agora cada demonstração estará acessível em:

- **React**: [`http://localhost:3001/`](http://localhost:3001/)
- **Vue**: [`http://localhost:3002/`](http://localhost:3002/)
- **Angular**: [`http://localhost:3003/`](http://localhost:3003/)

---

🎉 **Agora você está pronto para explorar a `@felipe-rossato/ui-library`!**


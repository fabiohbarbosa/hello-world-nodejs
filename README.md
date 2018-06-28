# REST API com Node.js

## Introdução ao Node.js
Node.js é um intepretador da linguagem Javascript que permite a execução de código Javascript do lado do servidor. 

Durante muitos anos o Javascript foi uma linguagem que era executada somente ao lado do cliente, pelos navegadores web.

Em 2009 Ryan Dahl criou o Node.js e seu desenvolvimento é mantido por uma fundação com o mesmo nome em parceria com o Linux Fundation.

Além de permitir a execução de códigos Javascript no backend o Node.js ajudou muito na evolução e na forma como trabalhamos no front-end, 
pois é surgiram diversas bibliotecas que hoje nos auxiliam em diversas tarefas como: execução de testes, compilação de códigos sass, build dos projectos, minificações, etc. 

As principais bibliotecas Javascript para a construção de *Single applications*, como **AngularJS** e **React** utilizam Node.js para auxiliar na complicação 
dos códigos finais para os utilizadores desses frameworks.


## Instalação
Verifique no site oficial do [Node.js](https://nodejs.org/en/download/package-manager/) as instruções para a instalação.

Junto com o Node.js será instalado a ferramenta **NPM**, o gerenciador de pacotes do Node.js, com ele é possível instalar diversas bibliotecas.

> Nesse [link](https://www.npmjs.com/) é possível verificar todas as bibliotecas disponíveis para instalação utilizando o NPM.

## Criando e Configurando o Projecto

Agora que o Node.js e o **NPM** foram instalados iniciaremos as configurações do projecto.

_Alguns comandos podem variar conforme o sistema operacional._

#### 1. Criar a pasta do projecto, e aceder a pasta:

```sh
mkdir hello-world-nodejs
cd hello-world-nodejs
```

#### 2. Criar o projecto Node.js

```sh
npm init -y
```

Esse comando criará o arquivo `package.json`, esse arquivo é responsável por controlar as dependências e 
os scripts de execução do projecto (explicarei melhor isso nos próximos passos).

*ps: O arquivo package-lock.json é um arquivo que foi adicionado nas versões mais recentes do Node.js que auxilia o NPM 
a fazer o download das dependências do projecto mais rapidamente.*

## Dependências do Projecto

Utilizaremos o NPM para instalar a biblioteca [**Express**](https://expressjs.com/) 
uma das diversas bibliotecas do Node.js que nos permite criar APIs REST.

Em um terminal execute o seguinte comando:
```sh
npm install express --save
```

*Após a instalação é possível verificar que o NPM adicionou a dependência no arquivo `package.json`.*

## Criar API Rest
Crie o arquivo `index.js` na raíz do projecto com o conteúdo:
```js
// Importar a biblioteca do express
const express = require('express');

// Criar uma instância do express
const app = express();

// Criar o endpoint e retornar um JSON
app.get('/api/hello-world', function (req, res) {
    res.json({message: 'Hello World!'});
});

// Inciar o servidor na porta 3000
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
```

## Executar a Aplicação
Vamos executar nossa aplicação
```sh
node index.js
```

Agora podemos ir a um navegador e aceder a URL [http://localhost:3000/api/hello-world](http://localhost:3000/api/hello-world)

Pronto! Construímos uma API REST de forma simples e rápida.

Tão fácil como fritar um ovo, não?

## Npm start
Por padrão os projectos Node.js devem iniciar o script principal com o comando
`npm start`, para que isso funcione é simples, basta adicionar o a chave `start` na chave
`script` no package.json e definir qual o comando que inicia a aplicação.

```json
  "scripts": {
    "start": "node index.js"
  }
```

Agora tente iniciar o projecto com o comando
```sh
npm start
```

É isso ai! Espero ter ajudado com mais esse conhecimento ;)
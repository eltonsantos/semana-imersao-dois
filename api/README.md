# COMO RODAR A PARTE DA API

### Instalar todas as dependencias indicada pelo package.json
npm install

### Rodar o projeto usando o nodemon 
nodemon app.js

## SEQUENCIA PARA CRIAR O PROJETO

### Criar o arquivo package
npm init

### Gerencia as requisições, rotas e URLs, entre outra funcionalidades
npm install express

### Instalar o módulo para reiniciar o servidor sempre que houver alteração no código fonte, g significa globalmente
npm install -g nodemon

### Rodar o projeto usando o nodemon 
nodemon app.js

### Instalar o banco de dados MongoDB
npm install --save mongodb

### Instalar o Mongoose - Mongoose traduz os dados do banco de dados para objetos JavaScript para que possam ser utilizados por sua aplicação.
npm install --save mongoose

### Permitir acesso a API
npm install --save cors

### Gerar o backup do banco de dados MongoDB
mongodump --db celke --out c:\data\db

### Restaurar o backup do banco de dados MongoDB
mongorestore --db celke c:\data\db\celke
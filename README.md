## Agenda de Contatos - Backend
Este projeto consiste na terceira parte da disciplina Desenvolvimento de Software para WEB da Universidade Federal do Ceará.

## Instruções

### Instalação de dependências
Para instalar as dependências do projeto execute o comando:
```bash
npm install
```	
### Servidor
Para iniciar o servidor execute o seguinte comando:
```bash
npm run start
```	
### Testes
Para rodar os testes automatizados execute o seguinte comando:
```bash
npm run test
```
### Banco de dados
Este projeto usa por padrão SQLite como banco de dados.

Para rodar as migrations execute o comando:
```bash
npx sequelize db:migrate
```
Para preencher o banco de dados com dados fictícios execute o comando:
```bash
npx sequelize db:seed:all
```
Para mais comandos execute o comando:
```bash
npx sequelize db --help
```
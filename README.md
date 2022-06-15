<h1 align="center">Simple Address Book - Backend</h1>
<h4 align="center">This project was a challenge proposed in the course Software Development for WEB at the Federal University of Ceará.</h4>
<p  align="center">
    <a  href="#rocket-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a  href="#information_source-how-to-use">How To Use</a>&nbsp;&nbsp;&nbsp;
</p>

## :rocket: Technologies

In this Node application I created an API that provides an endpoint capable of creating, listing, updating and deleting contacts.

- [Express](https://expressjs.com/pt-br/)
- [Sequelize](https://sequelize.org/)
- [nodemon](https://nodemon.io/)
- [Japa](https://japa.dev/)

## :information_source: How To Use

To run this project, you need to clone this repository and follow the steps below:

```bash
# Clone this repository

$ git clone https://github.com/bebetoalves/simple-address-book-backend

# Go into the repository

$ cd simple-address-book-backend

# Install packages

$ yarn install or npm install

# Run migrations

$ npx sequelize db:migrate

# Seed database

$ npx sequelize db:seed:all

# Run tests

$ yarn run test or npm run test

# Start development server

$ yarn dev or npm run dev
```

---

Made with :coffee: by Bebeto Alves
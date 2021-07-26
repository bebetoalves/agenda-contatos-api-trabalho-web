const test = require('japa')
const request = require('supertest')
const app = require('../src/app')
const db = require('../src/models')

test('um contato pode ser criado', async (assert) => {
  const contato = {
    nome: 'Bebeto',
    endereco: 'Russas',
    email: 'bebeto.contato@gmail.com',
    telefone: '88 9 9999-0000'
  }

  const response = await request(app)
    .post('/salvar')
    .send(contato)

  assert.equal(response.statusCode, 201)
  assert.equal(response.body.nome, contato.nome)
  assert.equal(response.body.endereco, contato.endereco)
  assert.equal(response.body.email, contato.email)
  assert.equal(response.body.telefone, contato.telefone)
})

test('os contatos podem ser acessados', async (assert) => {
  const response = await request(app)
    .get('/')

  assert.equal(response.statusCode, 200)
  assert.isArray(response.body)
  assert.equal(response.body.length, 1)
})

test('um contato pode ser acessado', async (assert) => {
  const response = await request(app)
    .get('/ver/1')

  assert.equal(response.statusCode, 200)
  assert.equal(response.body.nome, 'Bebeto')
})

test('um contato pode ser atualizado', async (assert) => {
  const novosDados = {
    nome: 'Bebeto Alves',
    endereco: 'Tiangua',
    email: 'bebeto.inbox@gmail.com',
    telefone: '88 9 9999-1111'
  }

  const response = await request(app)
    .patch('/atualizar/1')
    .send(novosDados)

  assert.equal(response.statusCode, 201)
  assert.equal(response.body.nome, novosDados.nome)
  assert.equal(response.body.endereco, novosDados.endereco)
  assert.equal(response.body.email, novosDados.email)
  assert.equal(response.body.telefone, novosDados.telefone)
})

test('um contato pode ser apagado', async (assert) => {
  const response = await request(app)
    .delete('/apagar/1')

  const contatos = await db.Contato.findAll()

  assert.equal(response.statusCode, 200)
  assert.equal(contatos.length, 0)
})

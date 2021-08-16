const express = require('express')
const router = express.Router()

const contatosController = require('../controllers/contatos')

router.get('/', contatosController.obterContatos)
router.post('/adicionar', contatosController.addContato)
router.get('/ver/:contatoId', contatosController.verContato)
router.patch('/atualizar/:contatoId', contatosController.atualizaContato)
router.delete('/apagar/:contatoId', contatosController.apagaContato)

module.exports = router

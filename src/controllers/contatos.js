const db = require('../models')

exports.addContato = async (req, res, next) => {
  const contato = await db.Contato.create(req.body)

  res.status(201).send(contato)
}

exports.obterContatos = async (req, res, next) => {
  const allContatos = await db.Contato.findAll({
    attributes: ['id', 'nome', 'endereco', 'email', 'telefone']
  })

  res.status(200).send(allContatos)
}

exports.verContato = async (req, res, next) => {
  const contato = await db.Contato.findOne({ where: { id: req.params.contatoId } })

  res.status(200).send(contato)
}

exports.atualizaContato = async (req, res, next) => {
  const atualizar = await db.Contato.update(req.body, { where: { id: req.params.contatoId } })

  const contato = await db.Contato.findOne({ where: { id: req.params.contatoId } })

  res.status(201).send(contato)
}

exports.apagaContato = async (req, res, next) => {
  const apagar = await db.Contato.destroy({ where: { id: req.params.contatoId } })

  res.status(200).send([])
}

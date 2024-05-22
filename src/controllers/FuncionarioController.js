const Funcionario = require('../models/Funcionario')

async function create(req, res) {
    try {
        const funcionario = new Funcionario(req.body)
        const funcionarioCriado = await funcionario.save()
        res.status(201).json(funcionarioCriado)
    } catch (error) {
        console.error("Erro ao criar funcionario: ", error)
        res.status(400).json({
            mensagem: "Erro ao criar funcionario!",
            erro: error.message
        })
    }
}

async function getAll(req, res) {
    res.json(await Funcionario.find().populate(['cargo', 'departamento']))
}

async function getById(req, res) {
    try {
        const funcionario = await Funcionario.findById(req.params.id).populate(['cargo', 'departamento'])
        if (funcionario) {
            res.json(funcionario)
        } else {
            res.status(404).json({ mensagem: "Funcionario não encontrado!" })
        }
    } catch (error) {
        console.error("Erro ao buscar funcionario por ID: ", error)
        res.status(500).json({
            mensagem: "Erro ao buscar funcionario por ID!",
            erro: error.message
        })
    }
}

async function update(req, res) {
    try {
        const funcionarioAtualizado = await Funcionario.findByIdAndUpdate(req.params.id, req.body, { new: true })
        if (funcionarioAtualizado) {
            res.json(funcionarioAtualizado)
        } else {
            res.status(404).json({ mensagem: "Funcionario não encontrado!" })
        }
    } catch (error) {
        console.error("Erro ao atualizar funcionario: ", error)
        res.status(400).json({
            mensagem: "Erro ao atualizar funcionario!",
            erro: error.message
        })
    }
}

async function remove(req, res) {
    try {
        const funcionarioExcluido = await Funcionario.findByIdAndDelete(req.params.id)
        if (funcionarioExcluido) {
            res.json({
                mensagem: "Funcionario excluído com sucesso!",
                funcionarioExcluido: funcionarioExcluido
            })
        } else {
            res.status(404).json({ mensagem: "Funcionario não encontrado!" })
        }
    } catch (error) {
        console.error("Erro ao excluir funcionario: ", error)
        res.status(400).json({
            mensagem: "Erro ao excluir funcionario!",
            erro: error.message
        })
    }
}

module.exports = {
    create,
    getAll,
    getById,
    update,
    remove
}

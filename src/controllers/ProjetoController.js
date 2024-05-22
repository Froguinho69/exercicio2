const Projeto = require('../models/Projeto')

async function create(req, res) {
    try {
        const projeto = new Projeto(req.body)
        const projetoCriado = await projeto.save()
        res.status(201).json(projetoCriado)
    } catch (error) {
        console.error("Erro ao criar projeto: ", error)
        res.status(400).json({
            mensagem: "Erro ao criar projeto!",
            erro: error.message
        })
    }
}

async function getAll(req, res) {
    try {
        const projetos = await Projeto.find()
        res.json(projetos)
    } catch (error) {
        console.error("Erro ao buscar projetos: ", error)
        res.status(500).json({
            mensagem: "Erro ao buscar projetos!",
            erro: error.message
        })
    }
}

async function getById(req, res) {
    try {
        const projeto = await Projeto.findById(req.params.id)
        if (projeto) {
            res.json(projeto)
        } else {
            res.status(404).json({ mensagem: "Projeto não encontrado!" })
        }
    } catch (error) {
        console.error("Erro ao buscar projeto por ID: ", error)
        res.status(500).json({
            mensagem: "Erro ao buscar projeto por ID!",
            erro: error.message
        })
    }
}

async function update(req, res) {
    try {
        const projetoAtualizado = await Projeto.findByIdAndUpdate(req.params.id, req.body, { new: true })
        if (projetoAtualizado) {
            res.json(projetoAtualizado)
        } else {
            res.status(404).json({ mensagem: "Projeto não encontrado!" })
        }
    } catch (error) {
        console.error("Erro ao atualizar projeto: ", error)
        res.status(400).json({
            mensagem: "Erro ao atualizar projeto!",
            erro: error.message
        })
    }
}

async function remove(req, res) {
    try {
        const projetoExcluido = await Projeto.findByIdAndDelete(req.params.id)
        if (projetoExcluido) {
            res.json({
                mensagem: "Projeto excluído com sucesso!",
                projetoExcluido
            })
        } else {
            res.status(404).json({ mensagem: "Projeto não encontrado!" })
        }
    } catch (error) {
        console.error("Erro ao excluir projeto: ", error)
        res.status(400).json({
            mensagem: "Erro ao excluir projeto!",
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
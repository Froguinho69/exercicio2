const Tarefa = require('../models/Tarefa')

async function create(req, res) {
    try {
        const tarefa = new Tarefa(req.body)
        const tarefaCriada = await tarefa.save()
        res.status(201).json(tarefaCriada)
    } catch (error) {
        console.error("Erro ao criar tarefa: ", error)
        res.status(400).json({
            mensagem: "Erro ao criar tarefa!",
            erro: error.message
        })
    }
}

async function getAll(req, res) {
    res.json(await Tarefa.find().populate(['responsavel', 'projeto']))
}

async function getById(req, res) {
    try {
        const tarefa = await Tarefa.findById(req.params.id).populate(['responsavel', 'projeto'])
        if (tarefa) {
            res.json(tarefa)
        } else {
            res.status(404).json({ mensagem: "Tarefa não encontrado!" })
        }
    } catch (error) {
        console.error("Erro ao buscar tarefa por ID: ", error)
        res.status(500).json({
            mensagem: "Erro ao buscar tarefa por ID!",
            erro: error.message
        })
    }
}

async function update(req, res) {
    try {
        const tarefaAtualizada = await Tarefa.findByIdAndUpdate(req.params.id, req.body, { new: true })
        if (tarefaAtualizada) {
            res.json(tarefaAtualizada)
        } else {
            res.status(404).json({ mensagem: "Tarefa não encontrado!" })
        }
    } catch (error) {
        console.error("Erro ao atualizar tarefa: ", error)
        res.status(400).json({
            mensagem: "Erro ao atualizar tarefa!",
            erro: error.message
        })
    }
}

async function remove(req, res) {
    try {
        const tarefaExcluida = await Tarefa.findByIdAndDelete(req.params.id)
        if (tarefaExcluida) {
            res.json({
                mensagem: "Tarefa excluída com sucesso!",
                tarefaExcluida: tarefaExcluida
            })
        } else {
            res.status(404).json({ mensagem: "Tarefa não encontrado!" })
        }
    } catch (error) {
        console.error("Erro ao excluir tarefa: ", error)
        res.status(400).json({
            mensagem: "Erro ao excluir tarefa!",
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
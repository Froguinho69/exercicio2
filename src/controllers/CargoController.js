const Cargo = require('../models/Cargo')

async function create(req, res) {
    try {
        const cargo = new Cargo(req.body)
        const cargoCriado = await cargo.save()
        res.status(201).json(cargoCriado)
    } catch (error) {
        console.error("Erro ao criar cargo: ", error)
        res.status(400).json({
            mensagem: "Erro ao criar cargo!",
            erro: error.message
        })
    }
}

async function getAll(req, res) {
    try {
        const cargos = await Cargo.find()
        res.json(cargos)
    } catch (error) {
        console.error("Erro ao buscar cargos: ", error)
        res.status(500).json({
            mensagem: "Erro ao buscar cargos!",
            erro: error.message
        })
    }
}

async function getById(req, res) {
    try {
        const cargo = await Cargo.findById(req.params.id)
        if (cargo) {
            res.json(cargo)
        } else {
            res.status(404).json({ mensagem: "Cargo não encontrado!" })
        }
    } catch (error) {
        console.error("Erro ao buscar cargo por ID: ", error)
        res.status(500).json({
            mensagem: "Erro ao buscar cargo por ID!",
            erro: error.message
        })
    }
}

async function update(req, res) {
    try {
        const cargoAtualizado = await Cargo.findByIdAndUpdate(req.params.id, req.body, { new: true })
        if (cargoAtualizado) {
            res.json(cargoAtualizado)
        } else {
            res.status(404).json({ mensagem: "Cargo não encontrado!" })
        }
    } catch (error) {
        console.error("Erro ao atualizar cargo: ", error)
        res.status(400).json({
            mensagem: "Erro ao atualizar cargo!",
            erro: error.message
        })
    }
}

async function remove(req, res) {
    try {
        const cargoExcluido = await Cargo.findByIdAndDelete(req.params.id)
        if (cargoExcluido) {
            res.json({
                mensagem: "Cargo excluído com sucesso!",
                cargoExcluido
            })
        } else {
            res.status(404).json({ mensagem: "Cargo não encontrado!" })
        }
    } catch (error) {
        console.error("Erro ao excluir cargo: ", error)
        res.status(400).json({
            mensagem: "Erro ao excluir cargo!",
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
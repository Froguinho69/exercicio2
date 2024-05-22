const Departamento = require('../models/Departamento');

async function create(req, res) {
    try {
        const departamento = new Departamento(req.body);
        const departamentoCriado = await departamento.save();
        res.status(201).json(departamentoCriado);
    } catch (error) {
        console.error("Erro ao criar departamento: ", error);
        res.status(400).json({
            mensagem: "Erro ao criar departamento!",
            erro: error.message
        });
    }
}

async function getAll(req, res) {
    try {
        const departamentos = await Departamento.find();
        res.json(departamentos);
    } catch (error) {
        console.error("Erro ao buscar departamentos: ", error);
        res.status(500).json({
            mensagem: "Erro ao buscar departamentos!",
            erro: error.message
        });
    }
}

async function getById(req, res) {
    try {
        const departamento = await Departamento.findById(req.params.id);
        if (departamento) {
            res.json(departamento);
        } else {
            res.status(404).json({ mensagem: "Departamento não encontrado!" });
        }
    } catch (error) {
        console.error("Erro ao buscar departamento por ID: ", error);
        res.status(500).json({
            mensagem: "Erro ao buscar departamento por ID!",
            erro: error.message
        });
    }
}

async function update(req, res) {
    try {
        const departamentoAtualizado = await Departamento.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (departamentoAtualizado) {
            res.json(departamentoAtualizado);
        } else {
            res.status(404).json({ mensagem: "Departamento não encontrado!" });
        }
    } catch (error) {
        console.error("Erro ao atualizar departamento: ", error);
        res.status(400).json({
            mensagem: "Erro ao atualizar departamento!",
            erro: error.message
        });
    }
}

async function remove(req, res) {
    try {
        const departamentoExcluido = await Departamento.findByIdAndDelete(req.params.id);
        if (departamentoExcluido) {
            res.json({
                mensagem: "Departamento excluído com sucesso!",
                departamentoExcluido
            });
        } else {
            res.status(404).json({ mensagem: "Departamento não encontrado!" });
        }
    } catch (error) {
        console.error("Erro ao excluir departamento: ", error);
        res.status(400).json({
            mensagem: "Erro ao excluir departamento!",
            erro: error.message
        });
    }
}

module.exports = {
    create,
    getAll,
    getById,
    update,
    remove
};
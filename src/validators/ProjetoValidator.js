const yup = require('yup')

const projetoSchema = yup.object().shape({
    nome: yup
        .string('campo precisa ser uma texto')
        .required('campo obrigatório'),
    descricao: yup
        .string(),
    dataInicio: yup
        .date('Data inválida')
        .required('campo obrigatório'),
    dataFim: yup
        .date('Data inválida')
        .required('campo obrigatório'),
})

function projetoValidador(req, res, next) {
    projetoSchema
        .validate(req.body, { abortEarly: false })
            .then(() => next())
            .catch(err => {
                const errors = err.inner.map(e => {
                    const erro = {
                        campo: e.path,
                        erros: e.errors
                    }
                    return erro
                })
                res.status(400).json(
                    {
                        mensagem: "Falha na validação dos campos",
                        erros: errors
                    }
                )
            })
}

module.exports = {
    projetoValidador
}
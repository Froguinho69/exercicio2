const yup = require('yup');

const departamentoSchema = yup.object().shape({
    nome: yup
        .string('Campo precisa ser uma texto')
        .required('Campo obrigatório'),
    descricao: yup
        .string()
});

function departamentoValidador(req, res, next) {
    departamentoSchema
        .validate(req.body, { abortEarly: false })
        .then(() => next())
        .catch(err => {
            const errors = err.inner.map(e => {
                const erro = {
                    campo: e.path,
                    erros: e.errors
                };
                return erro;
            });
            res.status(400).json({
                mensagem: "Falha na validação dos campos",
                erros: errors
            });
        });
}

module.exports = {
    departamentoValidador
};
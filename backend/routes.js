const { Router } = require('express');

const routes = Router();

routes.get('/', (req, res) => {
    res.send("ppp");
});
routes.get('/pendencias', (req, res) => {
    res.send("pendencias");
});
routes.get('/editarregistro', (req, res) => {
    res.send("editar registro");
});
routes.get('/ativaredesativar', (req, res) => {
    res.send("ativar desativar");
});
routes.get('/definircoordenador', (req, res) => {
    res.send("definir coordenador");
});
routes.get('/adicionarfuncionario', (req, res) => {
    res.send("adicionar funcionario");
});
routes.get('/relatorio', (req, res) => {
    res.send("relatorio");
});
routes.get('/ferias', (req, res) => {
    res.send("ferias");
});

module.exports = routes;
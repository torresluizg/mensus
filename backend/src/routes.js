const { Router } = require('express')
const EmployeeController = require('./controllers/EmployeeController')

const routes = Router()

routes.get('/', (req, res) => {
    res.send("ppp")
})
routes.get('/pendencias', (req, res) => {
    res.send("pendencias")
})
routes.get('/editarregistro', (req, res) => {
    res.send("editar registro")
})
routes.get('/ativaredesativar', (req, res) => {
    res.send("ativar desativar")
})
routes.get('/definircoordenador', (req, res) => {
    res.send("definir coordenador")
})
routes.post('/adicionarfuncionario', EmployeeController.store )
routes.get('/adicionarfuncionario', (req, res) => {
    res.send("adicionarfuncionario")
})
routes.get('/relatorio', (req, res) => {
    res.send("relatorio")
})
routes.get('/ferias', (req, res) => {
    res.send("ferias")
})

module.exports = routes
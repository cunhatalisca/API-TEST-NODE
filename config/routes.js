const express = require('express')
const router = express.Router()

let db = [
    {'1': { Nome: 'Cliente 1', Idade: '20'} },
    {'2': { Nome: 'Cliente 2', Idade: '30'} },
    {'3': { Nome: 'Cliente 3', Idade: '40'} }
]

// Buscar Dados
router.get('/', (req, res) => {
    return res.json(db);
})

// Inserir Dados
router.post('/add', (req, res) => {
    const body = req.body

    // Caso não exista o body ele retorna um status dizendo que o user precisa enviar algo
    db.push(body)

    return res.json(body)
})

router.delete('/:id', (req, res) => {
    const id = req.params.id

    let newDb = db.filter(item => {
        if(!item[id])
            return item
    })

    return res.send(newDb)
})

module.exports = router
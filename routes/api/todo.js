const express = require('express')
const Todo = require('../../models/Todo')
const router = express.Router()

router.post('/', (req, res) => {
    const todoItem = req.body

    const todo = new Todo(todoItem)

    todo.save()
        .then(() => {
            return res.json(todo)
        })
        .catch((err) => res.status(500).send('Server Error'))
})

router.get('/', (req, res) => {
    Todo.find({}, (err, todos) => {
        res.json(todos)
    }).catch((err) => {
        console.error(err.message)
        res.status(500).send('Server Error')
    })
})

router.delete('/:id', (req, res) => {
    Todo.findOneAndDelete({ _id: req.params.id })
        .then((data) => res.json(data))
        .catch((err) => {
            console.error(err.message)
            res.status(500).send('Server Error')
        })
})

module.exports = router

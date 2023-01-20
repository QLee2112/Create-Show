const express = require('express')
const Marine = require('../models/marine')
const router = express.Router()

//INDEX
router.get('/marines', (req, res, next) => {
    Marine.find()
        .then(marines => {
            return marine.map(marine => marine)
        })
        .then(marines => {
            res.status(200).json({ marines: marines })
        })
        .catch(next)
})

//SHOW
router.get('/marine/:id', (res, req, next) => {
    Marine.findById(req.params.id)
        .then(marine => {
            res.status(200).json({ marine: marine })
        })
        .catch(next)
})

//Create
//POST
router.post('/marines', (res, req, next) => {
    Marine.create(req.body.marine)
        .then(marine => {
            res.status(201).json({ marine: marine })
        })
        .catch(next)
})

//DELETE
router.delete('/marine/:id', (req, res, next) => {
    Marine.findById(red.params.id)
        .then(marine => {
            return marine.deleteOne(req.body.marine)
        })
        .then(() => res.sendStatus(204))
        .catch(next)
})

//UPDATE
router.patch('/marine/:id', (req, res, next) => {
    Marine.findById(req.params.id)
        .then(marine => {
            return marine.updateOne(req.body.marine)
        })
        .then(() => res.sendStatus(204))
        .catch(next)
})

module.exports = router
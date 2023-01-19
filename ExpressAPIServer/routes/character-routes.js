const express = require('express')
const Marine = require('../models/marine')
const router = express.Router()

//INDEX
router.get('/marines', (req, res, next) => {
    Marine.find()
        .then(marines => {
            return marine.map(marine => marines)
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

module.exports = router
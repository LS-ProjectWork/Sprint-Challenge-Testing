const express = require('express');
const knex = require('knex');

const knexConfig = require('../knexfile');
const db = knex(knexConfig.testing);

const server = express()

server.use(express.json());

server.post('/games', async (req, res) => {
    await db('games')
        .insert(req.body)
        .then(state => {
            res.status(200).json(state)
        })
        .catch(err => {
            res.status(422).send(err)
        })
})

server.get('/games', async (req, res) => {
    await db('games')
        .then(game => {
            res.status(200).json(game)
        })
})

module.exports = server;
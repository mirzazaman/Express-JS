const express = require('express');
const router = express.Router()
const { test, get, post } = require('./HomeController')

router.get('/', (req, res) => {
    test(req, res)
})

router.get('/get', (req, res) => {
    get(req, res)
})

router.post('/post', (req, res) => {
    post(req, res)
})


module.exports = router
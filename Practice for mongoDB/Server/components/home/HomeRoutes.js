const express = require('express');
const router = express.Router()
const { getFun } = require('./HomeController')

router.get('/', (req, res) => {
    res.json("HomeRouter is working")
    getFun(req, res)
})



module.exports = router
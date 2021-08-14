module.exports.test = (req, res) => {
    res.status(200)
    res.json('Function is working')
}

module.exports.get = (req, res) => {
    res.status(200)
    res.json('Get Function is working')
}

module.exports.post = (req, res) => {
    res.status(200)
    res.json(`My name is ${req.body.name}`)
}
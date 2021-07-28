const express = require('express')
const app = express();
const port = 5000

app.get('/', (req, res)=>{
    res.send('Home Page')
})
app.get('/about', (req, res)=>{
    res.send('About Page')
})
app.get('/login', (req, res)=>{
    res.send('Login Page')
})
app.get('/admin', (req, res)=>{
    res.send('Admin Page')
})

app.listen(port, ()=>{
    console.log(`First try is running on https://localhost:${port}`);
})
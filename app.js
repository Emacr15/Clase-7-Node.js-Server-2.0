const express = require ('express');
const app = express();
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello word of Express');    
});

app.get('/about', (req, res) => {
    res.send('This a small Express proyect! :) ');    
});

app.get('/contact-us', (req, res) => {
    res.send('My email is emanuelle15123@gmail.com');    
});

app.listen(port, () => {
    console.log('server listening on http://localhost:${port}');
});    
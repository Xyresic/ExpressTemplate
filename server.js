const pug = require('pug');
const path = require('path');
const express = require('express');
const body_parser = require('body-parser');

const hostname = '127.0.0.1';
const port = 3000;
const app = express();

app.set('view engine', 'pug');
app.use(body_parser.json());

app.get('/', (req, res) => {
    res.render('template', {title: 'Home', message: 'Hello there'});
});

app.listen(port, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
});
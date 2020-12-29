const express = require('express');
const body_parser = require('body-parser');

const hostname = '127.0.0.1';
const port = 3000;
const app = express();

app.use(body_parser.json());

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(port, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
});
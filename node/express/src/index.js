const { response } = require('express');
const express = require('express');

const routes = require('./app/routes');

const app = express();
app.use(routes)
app.listen(3000, () => console.log('http:localhost:3000'));

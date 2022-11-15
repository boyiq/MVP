const express = require('express');
const path = require('path');
const controllers = require('./controllers.js')

const app = express();
const port = 3001;

app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));
app.get('/test', controllers.test)

app.listen(port);
console.log(`Listening at http://localhost:${port}`)

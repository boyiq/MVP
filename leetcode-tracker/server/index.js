const express = require('express');
const path = require('path');
const controllers = require('./controllers.js')

const app = express();
const port = 3001;

app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

app.get('/test', controllers.test);
app.get('/problems', controllers.getAllProblems)
app.get('/problems/:level', controllers.findProblemsByLevel);
app.post('/problem', controllers.addNewProblem);
app.delete('/problem', controllers.deleteProblem)

app.listen(port);
console.log(`Listening at http://localhost:${port}`)

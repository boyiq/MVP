const express = require('express');
const path = require('path');
const controllers = require('./controllers.js')

const app = express();
const port = 3001;

app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

app.get('/problems', controllers.getAllProblems)
app.post('/problems', controllers.addNewProblem);
app.delete('/problems', controllers.deleteProblem);
app.get('/test', controllers.test);
app.get('/problems/:level', controllers.findProblemsByLevel);
app.get('/problems/:fam', controllers.findProblemsByFam)
app.get('/problems/:cat', controllers.findProblemsByCat);
app.put('/problems/fam', controllers.updateProblemFam);
app.put('/problems/dur', controllers.updateProblemDur);


app.listen(port);
console.log(`Listening at http://localhost:${port}`)

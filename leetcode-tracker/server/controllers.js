const models = require('./models.js');

module.exports = {
  test: function (req, res) {
    res.status(200).json({display: 'Hello'})
  },

  getAllProblems: function (req, res) {
    models.getAll()
      .then((response)=>{
        res.status(200).json(response.rows)
      })
      .catch((err)=>{
        console.log(err);
        res.sendStatus(404);
      })
  },

  addNewProblem: function (req, res) {
    models.create(req.body)
      .then(()=>{
        res.status(201).json('successfully added new problem')
      })
      .catch((err)=>{
        console.log(err);
        res.sendStatus(400);
      })
  },

  deleteProblem: function (req, res) {
    models.delete(req.body.id)
      .then(()=>{
        res.status(201).json('Problem deleted')
      })
      .catch((err)=>{
        console.log(err);
        res.sendStatus(400);
      })
  },

  findProblemsByLevel: function (req, res) {
    models.findByLevel(req.params.level)
      .then((response)=>{
        res.status(200).json(response.rows);
      })
      .catch((err)=>{
        console.log(err);
        res.sendStatus(404);
      })
  },

  findProblemsByFam: function (req, res) {
    models.findByFamiliarity(req.params.fam)
      .then((response)=>{
        res.status(200).json(response.rows);
      })
      .catch((err)=>{
        console.log(err);
        res.sendStatus(404);
      })
  },

  findProblemsByCat: function (req, res) {
    models.findByCat(req.params.cat)
      .then((response)=>{
        res.status(200).json(response.rows);
      })
      .catch((err)=>{
        console.log(err);
        res.sendStatus(404);
      })
  },

  updateProblemFam: function (req, res) {
    models.updateFamiliarity(req.body)
      .then(()=>{
        res.status(200).json('familiarity updated');
      })
      .catch((err)=>{
        console.log(err);
        res.sendStatus(400);
      })
  },

  updateProblemDur: function (req, res) {
    models.updateLastDuration(req.body)
      .then(()=>{
        res.status(200).json('most recent duration updated');
      })
      .catch((err)=>{
        console.log(err);
        res.sendStatus(400);
      })
  },
}
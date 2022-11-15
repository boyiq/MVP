const models = require('./models.js');

module.exports = {
  test: function (req, res) {
    res.status(200).json({display: 'Hello'})
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
    models.delete(req.body)
      .then(()=>{
        res.status(201).json('Problem deleted')
      })
      .catch((err)=>{
        console.log(err);
        res.sendStatus(400);
      })
  },

  findProblemByLevel: function (req, res) {
    models.findByLevel(req.params)
      .then((response)=>{
        res.status(200).json(response)
      })
  }

}
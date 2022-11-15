const db = require('./db.js');

module.exports = {
  getAll: function () {
    return db.query(`SELECT * FROM problems`);
  },

  create: function (problem) {
    console.log('got to models and the passed in problem is ', problem)
    return db.query(`
      INSERT INTO problems (name, category, level, target_duration, link, familiarity)
        VALUES ('${problem.name}', '${problem.category}', '${problem.level}', ${problem.target_duration}, '${problem.link}', '${problem.familiarity}')`)
  },

  delete: function(id) {
    return db.query(`DELETE FROM problems WHERE id=${id}`)
  },

  updateFamiliarity: function (problem) {
    return db.query(`UPDATE problems SET familiarity = '${problem.familiarity}' WHERE id = ${problem.id}`)
  },

  updateLastDuration: function (problem) {
    return db.query(`UPDATE problems SET last_duration = ${problem.last_duration} WHERE name = ${problem.id}`)
  },

  findByLevel: function (param) {
    return db.query(`SELECT name, category, last_duration, link, familiarity FROM problems WHERE level='${param}'`)
  },

  findByCat: function (param) {
    return db.query(`SELECT name, level, last_duration, link, familiarity FROM problems WHERE category='${param}'`)
  },

  findByFamiliarity: function (param) {
    return db.query(`SELECT name, category, level, last_duration, link FROM problems WHERE familiarity='${param}'`)
  },
}
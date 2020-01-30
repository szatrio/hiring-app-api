const db = require ('../configs/db');
module.exports = {
  getSkill: () => {
    return new Promise ((resolve, reject) => {
      db.query ('SELECT * FROM skill', (err, response) => {
        if (!err) {
          resolve (response);
        } else {
          reject (err);
        }
      });
    });
  },
  addSkill: (skill_name) => {
    return new Promise((resolve, reject) => {
      db.query('INSERT INTO skill (skill_name) VALUES (?)', skill_name, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  editSkill: (skill_name, id_skill) => {
    return new Promise((resolve, reject) => {
      db.query('UPDATE skill SET skill_name = ? WHERE id_skill = ?', [skill_name, id_skill], (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  deleteSkill: (id_skill) => {
    return new Promise((resolve, reject) => {
      db.query('DELETE FROM skill WHERE id_skill = ?', id_skill, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  }
};
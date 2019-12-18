const db = require ('../Configs/db');
module.exports = {
  getAllSkills: () => {
    return new Promise ((resolve, reject) => {
      db.query (`select skills.id_skills, skills.id_engineer, engineer.name, skills.id_skill, skill.skill_name
      FROM skills
      JOIN engineer ON engineer.id_engineer = skills.id_engineer
      JOIN skill ON skill.id_skill = skills.id_skill`, (err, response) => {
        if (!err) {
          resolve (response)
        } else {
          reject (err);
        }
      });
    });
  },
  getSkills: (id_engineer) => {
    return new Promise ((resolve, reject) => {
      db.query (`SELECT skills.id_skills, engineer.name, skill.skill_name
      FROM skills
      JOIN engineer ON engineer.id_engineer=skills.id_engineer
      JOIN skill ON skill.id_skill=skills.id_skill
      WHERE skills.id_engineer=?`, id_engineer, (err, response) => {
        if (!err) {
          resolve (response)
        } else {
          reject (err);
        }
      });
    });
  },
  addSkills: (id_engineer, id_skill) => {
    return new Promise((resolve, reject) => {
      db.query(`INSERT INTO skills (id_engineer, id_skill)
      VALUES (?, ?)`, [id_engineer, id_skill], (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  editSkills: (id_engineer, id_skills, id_skill) => {
    return new Promise((resolve, reject) => {
      db.query('UPDATE skills SET id_engineer=?, id_skill=? WHERE id_skills = ?', [id_engineer, id_skill, id_skills], (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  deleteSkills: (id_skills) => {
    return new Promise((resolve, reject) => {
      db.query('DELETE FROM skills WHERE id_skills = ?', id_skills, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  }
};

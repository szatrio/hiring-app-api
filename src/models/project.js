const db = require ('../Configs/db');
module.exports = {
  getProject: () => {
    return new Promise ((resolve, reject) => {
      db.query (`select * from project`, (err, response) => {
        if (!err) {
          resolve (response)
        } else {
          reject (err);
        }
      });
    });
  },
  addProject: (status, id_company, id_engineer) => {
    return new Promise((resolve, reject) => {
      db.query(`INSERT INTO project (status, id_company, id_engineer)
      VALUES (?, ?, ?)`, [status, id_company, id_engineer], (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  editProject: (status, id_company, id_engineer, id_project) => {
    return new Promise((resolve, reject) => {
      db.query('UPDATE project SET status=?, id_company=?, id_engineer=? WHERE id_project = ?', [status, id_company, id_engineer, id_project], (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  deleteProject: (id_project) => {
    return new Promise((resolve, reject) => {
      db.query('DELETE FROM project WHERE id_project = ?', id_project, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  }
};

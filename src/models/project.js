const db = require ('../Configs/db');
module.exports = {
  getProject: () => {
    return new Promise ((resolve, reject) => {
      db.query (`SELECT project.id_project, project.name_project, project.status, company.id_company, company.name as company, engineer.id_engineer, engineer.name as engineer
      FROM project
      JOIN company ON company.id_company = project.id_company
      LEFT JOIN engineer ON engineer.id_engineer = project.id_engineer`, (err, response) => {
        if (!err) {
          resolve (response)
        } else {
          reject (err);
        }
      });
    });
  },

  getCompanyProject: (id_user) => {
    return new Promise ((resolve, reject) => {
      db.query (`SELECT project.id_project, project.name_project, project.status, company.id_user, company.id_company, company.name as company, engineer.id_engineer, engineer.name as engineer
      FROM project
      JOIN company ON company.id_company = project.id_company
      LEFT JOIN engineer ON engineer.id_engineer = project.id_engineer
      WHERE company.id_user=${id_user}`
      , (err, response) => {
        if (!err) {
          resolve (response)
        } else {
          reject (err);
        }
      });
    });
  },

  addProject: (name_project, status, id_company, id_engineer) => {
    return new Promise((resolve, reject) => {
      db.query(`INSERT INTO project (name_project, status, id_company, id_engineer)
      VALUES (?, ?, ?, ?)`, [name_project, status, id_company, id_engineer], (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  editProject: (name_project, status, id_company, id_engineer, id_project) => {
    return new Promise((resolve, reject) => {
      db.query('UPDATE project SET name_project=?, status=?, id_company=?, id_engineer=? WHERE id_project = ?', [name_project, status, id_company, id_engineer, id_project], (err, result) => {
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

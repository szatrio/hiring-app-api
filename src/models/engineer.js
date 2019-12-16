const db = require ('../Configs/db');
module.exports = {
  getEngineer: () => {
    return new Promise ((resolve, reject) => {
      db.query ('SELECT * FROM engineer', (err, response) => {
        if (!err) {
          resolve (response);
        } else {
          reject (err);
        }
      });
    });
  },
  addEngineer: (data) => {
    return new Promise((resolve, reject) => {
      db.query('INSERT INTO engineer SET ?', data, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  editEngineer: (data, id_engineer) => {
    return new Promise((resolve, reject) => {
      db.query('UPDATE engineer SET ? WHERE id_engineer = ?', [data, id_engineer], (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  deleteEngineer: (id_engineer) => {
    return new Promise((resolve, reject) => {
      db.query('DELETE FROM engineer WHERE id_engineer = ?', id_engineer, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  searchEngineer: (name) => {
    return new Promise((resolve, reject) => {
      db.query(`SELECT * FROM engineer WHERE name LIKE '%${name}%'`, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  sortEngineer: (sort_by, order) => {
    return new Promise((resolve, reject) => {
      db.query(`SELECT * FROM engineer ORDER BY ${sort_by} ${order}`, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  }
};
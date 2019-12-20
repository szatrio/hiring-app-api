const db = require ('../Configs/db');
module.exports = {
  getCompany: () => {
    return new Promise ((resolve, reject) => {
      db.query ('SELECT * FROM company', (err, response) => {
        if (!err) {
          resolve (response);
        } else {
          reject (err);
        }
      });
    });
  },
  getCompanyProfile: () => {
    return new Promise ((resolve, reject) => {
      db.query ('SELECT * FROM company', (err, response) => {
        if (!err) {
          resolve (response);
        } else {
          reject (err);
        }
      });
    });
  },
  addCompany: (data) => {
    return new Promise((resolve, reject) => {
      db.query('INSERT INTO company SET ?', data, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  editCompany: (data, id_company) => {
    return new Promise((resolve, reject) => {
      db.query('UPDATE company SET ? WHERE id_company = ?', [data, id_company], (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  deleteCompany: (id_company) => {
    return new Promise((resolve, reject) => {
      db.query('DELETE FROM company WHERE id_company = ?', id_company, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  }
};
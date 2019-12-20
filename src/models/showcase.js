const db = require ('../Configs/db');
module.exports = {
  getAllShowcase: () => {
    return new Promise ((resolve, reject) => {
      db.query (`select showcase.id_showcase, showcase.showcase,showcase.id_engineer, engineer.name
      FROM showcase
      JOIN engineer ON engineer.id_engineer = showcase.id_engineer`, (err, response) => {
        if (!err) {
          resolve (response)
        } else {
          reject (err);
        }
      });
    });
  },
  getShowcase: (id_engineer) => {
    return new Promise ((resolve, reject) => {
      db.query (`SELECT showcase.id_showcase, engineer.name, showcase.showcase_name
      FROM showcase
      JOIN engineer ON engineer.id_engineer=showcase.id_engineer
      JOIN showcase ON showcase.id_showcase=showcase.id_showcase
      WHERE showcase.id_engineer=?`, id_engineer, (err, response) => {
        if (!err) {
          resolve (response)
        } else {
          reject (err);
        }
      });
    });
  },
  addShowcase: (id_engineer, showcase) => {
    return new Promise((resolve, reject) => {
      db.query(`INSERT INTO showcase (id_engineer, showcase)
      VALUES (?, ?)`, [id_engineer, showcase], (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  editShowcase: (id_engineer, id_showcase, showcase) => {
    return new Promise((resolve, reject) => {
      db.query('UPDATE showcase SET id_engineer=?, showcase=? WHERE id_showcase = ?', [id_engineer, showcase, id_showcase], (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  deleteShowcase: (id_showcase) => {
    return new Promise((resolve, reject) => {
      db.query('DELETE FROM showcase WHERE id_showcase = ?', id_showcase, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  }
};

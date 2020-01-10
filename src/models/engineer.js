const db = require ('../Configs/db');


module.exports = {

  getEngineer: (data) => {
    
    console.log(data)
    
    let pagination = ``,
        search = '',
        sort_by = '',
        order = ''

    if(data.limit != undefined && data.page != undefined){
      data.page = data.limit*(data.page-1)
      pagination = `LIMIT ${data.limit} OFFSET ${data.page}`
    }

    if (data.name != undefined && data.skill != undefined){
      search = `WHERE engineer.name LIKE '%${data.name}%' AND skill.skill_name LIKE '%${data.skill}%'`
    }else if(data.name != undefined){
      search = `WHERE engineer.name LIKE '%${data.name}%'`
    }else if(data.skill != undefined){
      search = `WHERE skill.skill_name LIKE '%${data.skill}%'`
    }

    if(data.sort_by == 'skill'){
      sort_by = `ORDER BY COUNT(DISTINCT skill.skill_name)`
    }else if(data.sort_by != undefined){
      sort_by = `ORDER BY ${data.sort_by}`
    }

    if(data.order != undefined){
      order = `${data.order}`
    }


    return new Promise ((resolve, reject) => {
      db.query (`SELECT engineer.id_engineer, engineer.id_user, engineer.name, engineer.description, GROUP_CONCAT(DISTINCT skill.skill_name) as skills, engineer.location, engineer.birth, GROUP_CONCAT(DISTINCT showcase.showcase) as showcase, engineer.e_salary, engineer.date_created, engineer.date_updated
      FROM skills
      JOIN skill ON skills.id_skill=skill.id_skill
      RIGHT JOIN engineer ON skills.id_engineer=engineer.id_engineer
      LEFT JOIN showcase ON engineer.id_engineer=showcase.id_engineer
      ${search}
      GROUP BY engineer.id_engineer 
      ${sort_by} ${order} ${pagination}`, (err, response) => {
        if (!err) {
          resolve (response);
        } else {
          reject (err);
        }
      });
    });
  },
  getEngineerProfile: () => {
    return new Promise ((resolve, reject) => {
      db.query (`SELECT engineer.id_engineer, engineer.id_user, engineer.name, engineer.description, GROUP_CONCAT(DISTINCT skill.skill_name) as skills, engineer.location, engineer.birth, GROUP_CONCAT(DISTINCT showcase.showcase) as showcase, engineer.e_salary, engineer.date_created, engineer.date_updated
      FROM skills
      JOIN skill ON skills.id_skill=skill.id_skill
      RIGHT JOIN engineer ON skills.id_engineer=engineer.id_engineer
      LEFT JOIN showcase ON engineer.id_engineer=showcase.id_engineer
      GROUP BY engineer.id_engineer `, (err, response) => {
        if (!err) {
          resolve (response);
        } else {
          reject (err);
        }
      });
    });
  },
  getEngineerById: (id) => {
    return new Promise ((resolve, reject) => {
      console.log(id, "ini id di model")
      db.query (`SELECT engineer.id_engineer, engineer.id_user, engineer.name, engineer.description, GROUP_CONCAT(DISTINCT skill.skill_name) as skills, engineer.location, engineer.birth, GROUP_CONCAT(DISTINCT showcase.showcase) as showcase, engineer.e_salary, engineer.date_created, engineer.date_updated
      FROM skills
      JOIN skill ON skills.id_skill=skill.id_skill
      RIGHT JOIN engineer ON skills.id_engineer=engineer.id_engineer
      LEFT JOIN showcase ON engineer.id_engineer=showcase.id_engineer
      WHERE engineer.id_engineer=${id}
      GROUP BY engineer.id_engineer `, (err, response) => {
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
  allEngineer: (data) => {
    
    let search = ``

    if (data.name != undefined && data.skill != undefined){
      search = `WHERE engineer.name LIKE '%${data.name}%' AND skill.skill_name LIKE '%${data.skill}%'`
    }else if(data.name != undefined){
      search = `WHERE engineer.name LIKE '%${data.name}%'`
    }else if(data.skill != undefined){
      search = `WHERE skill.skill_name LIKE '%${data.skill}%'`
    }
    return new Promise((resolve, reject) => {
        db.query(`SELECT engineer.id_engineer, engineer.id_user, engineer.name, engineer.description, GROUP_CONCAT(DISTINCT skill.skill_name) as skills, engineer.location, engineer.birth, GROUP_CONCAT(DISTINCT showcase.showcase) as showcase, engineer.date_created, engineer.date_updated
        FROM skills
        JOIN skill ON skills.id_skill=skill.id_skill
        RIGHT JOIN engineer ON skills.id_engineer=engineer.id_engineer
        LEFT JOIN showcase ON engineer.id_engineer=showcase.id_engineer
        ${search}
        GROUP BY engineer.id_engineer`, (err, result) => {
            if (!err) {
                resolve(result)
            } else {
                reject(err)
            }
        })
    })
  },
  // searchEngineer: (name, skill) => {
  //   return new Promise((resolve, reject) => {
  //     db.query(`SELECT engineer.id_engineer, engineer.name, engineer.description, GROUP_CONCAT(DISTINCT skill.skill_name) as skills, engineer.location, engineer.birth, GROUP_CONCAT(DISTINCT showcase.showcase) as showcase, engineer.date_created, engineer.date_updated
  //     FROM skills
  //     JOIN skill ON skills.id_skill=skill.id_skill
  //     RIGHT JOIN engineer ON skills.id_engineer=engineer.id_engineer
  //     LEFT JOIN showcase ON engineer.id_engineer=showcase.id_engineer
  //     WHERE engineer.name LIKE '%${name}%' OR skill.skill_name LIKE '%${skill}%' GROUP BY engineer.id_engineer`, (err, result) => {
  //       if (!err) {
  //         resolve(result)
  //       } else {
  //         reject(new Error(err))
  //       }
  //     })
  //   })
  // },
  // sortEngineer: (sort_by, order) => {
  //   return new Promise((resolve, reject) => {
  //     if (sort_by == "skill"){
  //       db.query(`SELECT engineer.id_engineer, engineer.name, engineer.description, GROUP_CONCAT(DISTINCT skill.skill_name) as skills, engineer.location, engineer.birth, GROUP_CONCAT(DISTINCT showcase.showcase) as showcase, engineer.date_created, engineer.date_updated
  //       FROM skills
  //       JOIN skill ON skills.id_skill=skill.id_skill
  //       RIGHT JOIN engineer ON skills.id_engineer=engineer.id_engineer
  //       LEFT JOIN showcase ON engineer.id_engineer=showcase.id_engineer
  //       GROUP BY engineer.id_engineer ORDER BY COUNT(DISTINCT skill.skill_name) ${order}`, (err, result) => {
  //         if (!err) {
  //           resolve(result)
  //         } else {
  //           reject(new Error(err))
  //         }
  //       })  
  //     }else{
  //       db.query(`SELECT engineer.id_engineer, engineer.name, engineer.description, GROUP_CONCAT(DISTINCT skill.skill_name) as skills, engineer.location, engineer.birth, GROUP_CONCAT(DISTINCT showcase.showcase) as showcase, engineer.date_created, engineer.date_updated
  //       FROM skills
  //       JOIN skill ON skills.id_skill=skill.id_skill
  //       RIGHT JOIN engineer ON skills.id_engineer=engineer.id_engineer
  //       LEFT JOIN showcase ON engineer.id_engineer=showcase.id_engineer
  //       GROUP BY engineer.id_engineer ORDER BY ${sort_by} ${order}`, (err, result) => {
  //         if (!err) {
  //           resolve(result)
  //         } else {
  //           reject(new Error(err))
  //         }
  //       })
  //     }
  //   })
  // },
  // pageEngineer: (limit, page) => {
  //   return new Promise((resolve, reject) => {
  //     db.query(`SELECT engineer.id_engineer, engineer.name, engineer.description, GROUP_CONCAT(DISTINCT skill.skill_name) as skills, engineer.location, engineer.birth, GROUP_CONCAT(DISTINCT showcase.showcase) as showcase, engineer.date_created, engineer.date_updated
  //     FROM skills
  //     JOIN skill ON skills.id_skill=skill.id_skill
  //     RIGHT JOIN engineer ON skills.id_engineer=engineer.id_engineer
  //     LEFT JOIN showcase ON engineer.id_engineer=showcase.id_engineer
  //     GROUP BY engineer.id_engineer LIMIT ${limit} OFFSET ${page}`, (err, result) => {
  //       if (!err) {
  //         resolve(result)
  //       } else {
  //         reject(new Error(err))
  //       }
  //     })
  //   })
  // },
};
const model = require ('../models/engineer');
const form = require ('../helpers/form');

module.exports = {
  getEngineer: (req, res) => {

    let { name, skill, sort_by, order, limit, page} = req.query
    let data = {
      name,
      skill,
      sort_by,
      order,
      limit,
      page
    }


    model
      .getEngineer (data)
      .then (response => {
        //resolve
        form.success (res, response);
      })
      .catch (err => {
        //reject
        console.log (err);
      });
  },
  addEngineer: (req, res) => {
    const { name, description, location, birth } = req.body
    const data = {
      name,
      description,
      location,
      birth,
      date_created: new Date(),
      date_updated: new Date(),
    }

    model.addEngineer(data)
      .then(result => {
        res.json(result)
      })
      .catch(err => {
        console.log(err)
      })
  },
  editEngineer: (req, res) => {
    const id_engineer = req.params.id_engineer
    const { name, description, location, birth } = req.body
    const data = {
        name,
        description,
        location,
        birth,
        date_updated: new Date(),
    }

    model.editEngineer(data, id_engineer)
      .then(result => {
        res.json(result)
      })
      .catch(err => {
        console.log(err)
      })
  },
  deleteEngineer: (req, res) => {
    const id_engineer = req.params.id_engineer

    model.deleteEngineer(id_engineer)
      .then(result => {
        res.json(result)
      })
      .catch(err => {
        console.log(err)
      })
  },
  
  // filterEngineer: (req, res) => {
  //   let { name, skill, sort_by, order, limit, page} = req.query
  //   page = limit*(page-1)
  //   let data = {
  //     name,
  //     skill,
  //     sort_by,
  //     order,
  //     limit,
  //     page
  //   }
  //   model.filterEngineer(data)
  //     .then(result => {
  //       res.json(result)
  //     })
  //     .catch(err => {
  //       console.log(err)
  //     })
  // }
};
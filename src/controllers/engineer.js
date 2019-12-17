const model = require ('../models/engineer');
const form = require ('../helpers/form');

module.exports = {
  getEngineer: (_, res) => {
    model
      .getEngineer ()
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
  searchEngineer: (req, res) => {
    const name = req.query.name
    const skill = req.query.skill

    model.searchEngineer(name, skill)
      .then(result => {
        res.json(result)
      })
      .catch(err => {
        console.log(err)
      })
  },
  sortEngineer: (req, res) => {
    const sort_by = req.query.sort_by
    const order = req.query.order

    model.sortEngineer(sort_by, order)
      .then(result => {
        res.json(result)
      })
      .catch(err => {
        console.log(err)
      })
  },
  pageEngineer: (req, res) => {
    const limit = req.query.limit
    let page = req.query.page
    page = limit*(page-1)

    model.pageEngineer(limit, page)
      .then(result => {
        res.json(result)
      })
      .catch(err => {
        console.log(err)
      })
  }
};
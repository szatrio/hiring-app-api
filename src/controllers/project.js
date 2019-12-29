const model = require ('../models/project');
const form = require ('../helpers/form');

module.exports = {
  getProject: (_, res) => {
    model
      .getProject ()
      .then (response => {
        //resolve
        form.success (res, response);
      })
      .catch (err => {
        //reject
        console.log (err);
      });
  },
  addProject: (req, res) => {
    const name_project = req.body.name_project
    const status = req.body.status
    const id_company = req.body.id_company
    const id_engineer = req.body.id_engineer

    model.addProject(name_project, status, id_company, id_engineer)
      .then(result => {
        res.json(result)
      })
      .catch(err => {
        console.log(err)
      })
  },
  editProject: (req, res) => {
    const id_project = req.params.id_project
    const name_project = req.body.name_project
    const status = req.body.status
    const id_company = req.body.id_company
    const id_engineer = req.body.id_engineer

    model.editProject(name_project, status, id_company, id_engineer, id_project)
      .then(result => {
        res.json(result)
      })
      .catch(err => {
        console.log(err)
      })
  },
  deleteProject: (req, res) => {
    const id_project = req.params.id_project

    model.deleteProject(id_project)
      .then(result => {
        res.json(result)
      })
      .catch(err => {
        console.log(err)
      })
  }
};
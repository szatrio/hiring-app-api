const model = require ('../models/skills');
const form = require ('../helpers/form');

module.exports = {
  getAllSkills: (req, res) => {
    model
      .getAllSkills ()
      .then (response => {
        //resolve
        form.success (res, response)
      })
      .catch (err => {
        //reject
        console.log (err);
      });
  },
  getSkills: (req, res) => {
    const id_engineer = req.params.id_engineer
    model
      .getSkills (id_engineer)
      .then (response => {
        //resolve
        form.success (res, response)
      })
      .catch (err => {
        //reject
        console.log (err);
      });
  },
  addSkills: (req, res) => {
    const id_engineer = req.params.id_engineer
    const id_skill = req.body.id_skill

    model.addSkills(id_engineer, id_skill)
      .then(result => {
        res.json(result)
      })
      .catch(err => {
        console.log(err)
      })
  },
  editSkills: (req, res) => {
    const id_engineer = req.params.id_engineer
    const id_skills = req.params.id_skills
    const id_skill = req.body.id_skill

    model.editSkills(id_engineer, id_skills, id_skill)
      .then(result => {
        res.json(result)
      })
      .catch(err => {
        console.log(err)
      })
  },
  deleteSkills: (req, res) => {
    const id_skills = req.params.id_skills

    model.deleteSkills(id_skills)
      .then(result => {
        res.json(result)
      })
      .catch(err => {
        console.log(err)
      })
  }
};
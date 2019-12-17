const model = require ('../models/skill');
const form = require ('../helpers/form');

module.exports = {
  getSkill: (_, res) => {
    model
      .getSkill ()
      .then (response => {
        //resolve
        form.success (res, response);
      })
      .catch (err => {
        //reject
        console.log (err);
      });
  },
  addSkill: (req, res) => {
    const skill_name = req.body.skill_name

    model.addSkill(skill_name)
      .then(result => {
        res.json(result)
      })
      .catch(err => {
        console.log(err)
      })
  },
  editSkill: (req, res) => {
    const id_skill = req.params.id_skill
    const skill_name = req.body.skill_name

    model.editSkill(skill_name, id_skill)
      .then(result => {
        res.json(result)
      })
      .catch(err => {
        console.log(err)
      })
  },
  deleteSkill: (req, res) => {
    const id_skill = req.params.id_skill

    model.deleteSkill(id_skill)
      .then(result => {
        res.json(result)
      })
      .catch(err => {
        console.log(err)
      })
  }
};
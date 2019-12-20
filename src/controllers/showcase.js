const model = require ('../models/showcase');
const form = require ('../helpers/form');

module.exports = {
  getAllShowcase: (req, res) => {
    model
      .getAllShowcase ()
      .then (response => {
        //resolve
        form.success (res, response)
      })
      .catch (err => {
        //reject
        console.log (err);
      });
  },
  getShowcase: (req, res) => {
    const id_engineer = req.params.id_engineer
    model
      .getShowcase (id_engineer)
      .then (response => {
        //resolve
        form.success (res, response)
      })
      .catch (err => {
        //reject
        console.log (err);
      });
  },
  addShowcase: (req, res) => {
    const id_engineer = req.params.id_engineer
    const showcase = req.body.showcase

    model.addShowcase(id_engineer, showcase)
      .then(result => {
        res.json(result)
      })
      .catch(err => {
        console.log(err)
      })
  },
  editShowcase: (req, res) => {
    const id_engineer = req.params.id_engineer
    const id_showcase = req.params.id_showcase
    const showcase = req.body.showcase

    model.editShowcase(id_engineer, id_showcase, showcase)
      .then(result => {
        res.json(result)
      })
      .catch(err => {
        console.log(err)
      })
  },
  deleteShowcase: (req, res) => {
    const id_showcase = req.params.id_showcase

    model.deleteShowcase(id_showcase)
      .then(result => {
        res.json(result)
      })
      .catch(err => {
        console.log(err)
      })
  }
};
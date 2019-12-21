const model = require ('../models/company');
const form = require ('../helpers/form');

module.exports = {
  getCompany: (req, res) => {
    model
      .getCompany ()
      .then (response => {
        //resolve
        form.success (res, response);
      })
      .catch (err => {
        //reject
        console.log (err);
      });
  },
  getCompanyProfile: (req, res) => {
    model
      .getCompany ()
      .then (response => {
        //resolve
        // form.success (res, response);
        console.log(response)
        console.log(req.user)
        res.json(response.filter(response => response.id_user == req.user.id_user))
      })
      .catch (err => {
        //reject
        console.log (err);
      });
  },
  addCompany: (req, res) => {
    const { id_user, name, logo, location, description } = req.body
    const data = {
      id_user,
      name,
      logo,
      location,
      description,
    }

    model.addCompany(data)
      .then(result => {
        res.json(result)
      })
      .catch(err => {
        console.log(err)
      })
  },
  editCompany: (req, res) => {
    const id_company = req.params.id_company
    const { name, logo, location, description } = req.body
    const data = {
      name,
      logo,
      location,
      description,
    }

    model.editCompany(data, id_company)
      .then(result => {
        res.json(result)
      })
      .catch(err => {
        console.log(err)
      })
  },
  deleteCompany: (req, res) => {
    const id_company = req.params.id_company

    model.deleteCompany(id_company)
      .then(result => {
        res.json(result)
      })
      .catch(err => {
        console.log(err)
      })
  }
};
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
    model.allEngineer()
    .then(result =>{
      console.log(result)
      model.getEngineer (data)
        .then (response => {
          //resolve
          // console.log(req)
          if(req.query.limit != undefined && req.query.page != undefined){
            res.json({
              status: 200,
              msg: 'Success',
              "page" : req.query.page + " from " + Math.ceil(result.length/req.query.limit) + " pages",
              "data": length.result + "results",
              response 
            })
          }else(
            form.success (res, response)
          )
          // console.log(response)
          // console.log(req.user.id_user)
          // console.log(req.user.id_user)
        })
        .catch (err => {
          //reject
          console.log (err);
        });
    }) 
  },
  getEngineerProfile: (req, res) => {
    model
      .getEngineerProfile ()
      .then (response => {
        //resolve
        // console.log(response)
        // console.log(req.user.id_user)
        // console.log(req.user.id_user)
        res.json(response.filter(response => response.id_user == req.user.id_user))
      })
      .catch (err => {
        //reject
        console.log (err);
      });
  },
  addEngineer: (req, res) => {
    const { id_user, name, description, location, birth, } = req.body
    const data = {
      id_user,
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
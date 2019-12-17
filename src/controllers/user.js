const model = require ('../models/user');
const form = require ('../helpers/form');
const bcryptjs = require('bcryptjs')
const saltRounds = 10


const validateEmail = (email) => {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(email)
}

const validatePassword = (password) => {
  var re = /(?=.*[a-z])(?=.*[0-9])/
  return re.test(password)
}

module.exports = {
  getUser: (_, res) => {
    model
      .getUser ()
      .then (response => {
        //resolve
        form.success (res, response);
      })
      .catch (err => {
        //reject
        console.log (err);
      });
  },

  addUser: (req, res) => {
    let email = req.body.email
    let password = req.body.password
    let role = req.body.role
    
    model.emailCheck(email)
    .then(resultQuery => {
          if (resultQuery.length === 0) {
            if (validateEmail(email) == true){
              if (validatePassword(password) == true){
                    bcryptjs.genSalt(saltRounds, (err, salt) => {
                        bcryptjs.hash(password, salt, (err, hash) => {
                            const data = { email, password: hash, role }
                
                            model.adduser(data)
                                .then(resultQuery => {
                                    res.json({
                                        status: 200,
                                        message: 'Success registering new user',
                                        data
                                    })
                                })
                                .catch(err => {
                                    console.log(err)
                                    res.status(400).json({
                                        status: 400,
                                        message: 'Register was failed'
                                    })
                                })
                        })
                    })
              }else{
                res.json({
                  message: 'Password not valid, lowercase and number are required',
                })
              }
            }else{
              res.json({
                message: 'Email not valid',
              })
            } 
          } else {
            res.status(400).json({
                status: 400,
                message: 'email already exist'
            })
            }
        })
          .catch(err => {
              res.status(400).json({
                  status: 400,
                  message: 'error get email from database'
              })
        })          
},

  editUser: (req, res) => {
    const id_user = req.params.id_user
    const { email, username, password, role } = req.body
    const data = {
        email,
        username,
        password,
        role,
    }

    model.editUser(data, id_user)
      .then(result => {
        res.json(result)
      })
      .catch(err => {
        console.log(err)
      })
  },
  deleteUser: (req, res) => {
    const id_user = req.params.id_user

    model.deleteUser(id_user)
      .then(result => {
        res.json(result)
      })
      .catch(err => {
        console.log(err)
      })
  }
};
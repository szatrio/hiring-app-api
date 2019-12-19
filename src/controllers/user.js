require('dotenv').config()

const model = require ('../models/user');
const form = require ('../helpers/form');
const bcryptjs = require('bcryptjs')

const jwt = require('jsonwebtoken')


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
  getUser: (req, res) => {
    model
      .getUser ()
      .then (response => {
        //resolve
        // form.success (res, response);
        // console.log(response.id_user)
        // console.log(req.user.id_user)
        console.log(req)
        res.json(response.filter(response => response.id_user == req.user.id_user))
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
                
                            model.addUser(data)
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
          }else {
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
    const {email, password, hash, role} = req.body

    if (validateEmail(email) == true){
      if (validatePassword(password) == true){
            bcryptjs.genSalt(saltRounds, (err, salt) => {
                bcryptjs.hash(password, salt, (err, hash) => {
                    const data = { email, password: hash, role }
        
                    model.editUser(data, id_user)
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
  },
  loginUser: (req, res) => {
    const email = req.body.email

    model.loginUser(email)
        .then(resultQuery => {
            const id_user = resultQuery[0].id_user
            const passwordHash = resultQuery[0].password
            const password = req.body.password

            if (bcryptjs.compareSync(password, passwordHash)) {
                const token = jwt.sign({ id_user: id_user }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1h' })

                res.json({
                    status: 200,
                    message: 'Login Success',
                    data: {
                        email,
                        token
                    }
                })
            } else {
                res.json({
                    status: 400,
                    message: 'Password is incorrect'
                })
            }
        })
        .catch(err => {
            console.log(err)
            res.status(400).json({
                status: 400,
                message: 'Email or Password is incorrect!'
            })
        })

    }
};
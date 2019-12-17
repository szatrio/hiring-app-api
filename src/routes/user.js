const express = require ('express')
const controller = require('../controllers/user')
const Router = express.Router()

Router
    .get ('/', controller.getUser) 
    .post ('/', controller.addUser)  
    .patch ('/:id_user', controller.editUser)
    .delete ('/:id_user', controller.deleteUser)
module.exports = Router
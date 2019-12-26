const express = require ('express')
const controller = require('../controllers/user')
const auth = require('../helpers/auth')
const Router = express.Router()



Router
    .get ('/', auth.checkToken, controller.getUser)
    .get ('/company', auth.checkToken, controller.userCompany)
    .get ('/engineer', auth.checkToken, controller.userEngineer)
    .get ('/profile', auth.checkToken, controller.getProfile) 
    .post ('/', controller.addUser)  
    .patch ('/:id_user', auth.checkToken, controller.editUser)
    .delete ('/:id_user', auth.checkToken, controller.deleteUser)
    .post('/login', controller.loginUser)
    // .post('/token', refreshToken )
    // .delete('/logout', destroyToken )

module.exports = Router


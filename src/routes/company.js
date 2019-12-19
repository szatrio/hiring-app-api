const express = require ('express')
const controller = require('../controllers/company')
const auth = require('../helpers/auth')
const Router = express.Router()



Router
    .get ('/', auth.checkToken, controller.getCompany) 
    .post ('/', controller.addCompany)  
    .patch ('/:id_company', controller.editCompany)
    .delete ('/:id_company', controller.deleteCompany)
module.exports = Router
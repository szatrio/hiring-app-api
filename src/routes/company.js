const express = require ('express')
const controller = require('../controllers/company')
const auth = require('../helpers/auth')
const Router = express.Router()



Router
    .get ('/', auth.checkToken, controller.getCompany)
    .get ('/profile', auth.checkToken, controller.getCompanyProfile) 
    .post ('/',auth.checkToken,  controller.addCompany)  
    .patch ('/:id_company',auth.checkToken,  controller.editCompany)
    .delete ('/:id_company',auth.checkToken, controller.deleteCompany)
module.exports = Router
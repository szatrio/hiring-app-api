const express = require ('express')
const controller = require('../controllers/project')
const auth = require('../helpers/auth')
const Router = express.Router()

Router
    .get ('/', auth.checkToken, controller.getProject) 
    .post ('/', auth.checkToken, controller.addProject)  
    .patch ('/:id_project', auth.checkToken, controller.editProject)
    .delete ('/:id_project', auth.checkToken, controller.deleteProject)
module.exports = Router
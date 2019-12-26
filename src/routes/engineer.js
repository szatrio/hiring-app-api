const express = require ('express')
const controller = require('../controllers/engineer')
const controllerskill = require('../controllers/skills')
const controllerShowcase = require('../controllers/showcase')
const auth = require('../helpers/auth')
const Router = express.Router()

Router
    .get ('/', auth.checkToken, controller.getEngineer)
    .get ('/profile', auth.checkToken, controller.getEngineerProfile) 
    .post ('/', auth.checkToken, controller.addEngineer) 
    .patch ('/:id_engineer', auth.checkToken, controller.editEngineer)
    .delete ('/:id_engineer', auth.checkToken, controller.deleteEngineer)
    // .get ('/filter', controller.searchEngineer)
    
    // skills
    .get ('/:id_engineer/skills', auth.checkToken, controllerskill.getSkills)
    .post ('/:id_engineer/skills', auth.checkToken, controllerskill.addSkills)
    .patch ('/:id_engineer/skills/:id_skills', auth.checkToken, controllerskill.editSkills)
    .delete ('/:id_engineer/skills/:id_skills', auth.checkToken, controllerskill.deleteSkills)

    // showcase
    .get ('/:id_engineer/showcase', auth.checkToken, controllerShowcase.getShowcase)
    .post ('/:id_engineer/showcase', auth.checkToken, controllerShowcase.addShowcase)
    .patch ('/:id_engineer/showcase/:id_showcase', auth.checkToken, controllerShowcase.editShowcase)
    .delete ('/:id_engineer/showcase/:id_showcase', auth.checkToken, controllerShowcase.deleteShowcase)

module.exports = Router
const express = require ('express')
const controller = require('../controllers/engineer')
const controllerskill = require('../controllers/skills')
const controllerShowcase = require('../controllers/showcase')
const auth = require('../helpers/auth')
const Router = express.Router()

Router
    .get ('/', auth.checkToken, controller.getEngineer)
    .get ('/profile', auth.checkToken, controller.getEngineerProfile) 
    .post ('/', controller.addEngineer) 
    .patch ('/:id_engineer', controller.editEngineer)
    .delete ('/:id_engineer', controller.deleteEngineer)
    // .get ('/filter', controller.searchEngineer)
    
    // skills
    .get ('/:id_engineer/skills', controllerskill.getSkills)
    .post ('/:id_engineer/skills', controllerskill.addSkills)
    .patch ('/:id_engineer/skills/:id_skills', controllerskill.editSkills)
    .delete ('/:id_engineer/skills/:id_skills', controllerskill.deleteSkills)

    // showcase
    .get ('/:id_engineer/showcase', controllerShowcase.getShowcase)
    .post ('/:id_engineer/showcase', controllerShowcase.addShowcase)
    .patch ('/:id_engineer/showcase/:id_showcase', controllerShowcase.editShowcase)
    .delete ('/:id_engineer/showcase/:id_showcase', controllerShowcase.deleteShowcase)

module.exports = Router
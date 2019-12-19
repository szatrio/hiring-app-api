const express = require ('express')
const controller = require('../controllers/engineer')
const controllerskill = require('../controllers/skills')
const auth = require('../helpers/auth')
const Router = express.Router()

Router
    .get ('/', auth.checkToken, controller.getEngineer) 
    .post ('/', controller.addEngineer) 
    .patch ('/:id_engineer', controller.editEngineer)
    .delete ('/:id_engineer', controller.deleteEngineer)
    // .get ('/filter', controller.searchEngineer)
    
    // skills
    .get ('/:id_engineer/skills', controllerskill.getSkills)
    .post ('/:id_engineer/skills', controllerskill.addSkills)
    .patch ('/:id_engineer/skills/:id_skills', controllerskill.editSkills)
    .delete ('/:id_engineer/skills/:id_skills', controllerskill.deleteSkills)

module.exports = Router
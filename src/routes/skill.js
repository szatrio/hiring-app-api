const express = require ('express')
const controller = require('../controllers/skill')

const Router = express.Router()

Router
    .get ('/', controller.getSkill) 
    .post ('/', controller.addSkill)  
    .patch ('/:id_skill', controller.editSkill)
    .delete ('/:id_skill', controller.deleteSkill)
module.exports = Router
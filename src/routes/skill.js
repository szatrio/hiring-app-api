const express = require ('express')
const controller = require('../controllers/skill')
const auth = require('../helpers/auth')
const Router = express.Router()

Router
    .get ('/', auth.checkToken, controller.getSkill) 
    .post ('/', auth.checkToken, controller.addSkill)  
    .patch ('/:id_skill', auth.checkToken, controller.editSkill)
    .delete ('/:id_skill', auth.checkToken, controller.deleteSkill)
module.exports = Router
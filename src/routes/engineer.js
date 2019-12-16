const express = require ('express')
const controller = require('../controllers/engineer')

const Router = express.Router()

Router
    .get ('/', controller.getEngineer) 
    .post ('/', controller.addEngineer) 
    .patch ('/:id_engineer', controller.editEngineer)
    .delete ('/:id_engineer', controller.deleteEngineer)
    .get ('/search', controller.searchEngineer)
    .get ('/sort', controller.sortEngineer)
module.exports = Router
const express = require ('express');
const engineer = require ('./engineer');
const company = require ('./company');
const user = require ('./user');
const skill = require ('./skill');
const register = require('../controllers/user')
const skills = require('../controllers/skills')

const Router = express.Router ();

Router.use ('/engineer', engineer); // localhost:8000/engineer
Router.use ('/company', company);
Router.use ('/user', user)
Router.use ('/register', register.addUser)
Router.use ('/skill', skill)
Router.use ('/skills', skills.getAllSkills)



module.exports = Router;
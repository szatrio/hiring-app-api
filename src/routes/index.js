const express = require ('express');
const engineer = require ('./engineer');
const company = require ('./company');


const Router = express.Router ();

Router.use ('/engineer', engineer); // localhost:8000/engineer
Router.use ('/company', company);

module.exports = Router;
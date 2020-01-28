const express = require('express');
const routes = express.Router();
const authCtrl = require('../controllers/authController');


routes.post('/register', authCtrl.create);
routes.post('/authenticate', authCtrl.authenticate);

module.exports = routes;

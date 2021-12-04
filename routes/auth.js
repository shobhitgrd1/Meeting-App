const express = require('express')
const routes = express.Router();
const { register, login} = require('../controller/auth')

routes.route('/register').post(register)
routes.route('/login').post(login)

module.exports = routes
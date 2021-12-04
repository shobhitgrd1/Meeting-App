const express = require('express')
const routes = express.Router();
const { addMeeting, getAllMeeting, UpdateMeeting, deleteMeeting }  = require('../controller/meeting')

routes.route('/').post(addMeeting).get(getAllMeeting)
routes.route('/:id').patch(UpdateMeeting).delete(deleteMeeting)

module.exports = routes
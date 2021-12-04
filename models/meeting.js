const mongoose = require('mongoose')
const moment = require('moment')

const meetingSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
    startTime: {
        hours: {
            type: Number,
            required: true,
        },
        minutes: {
            type: Number,
            required: true,
        },
    },
    endTime: {
        hours: {
            type: Number,
            required: true,
        },
        minutes: {
            type: Number,
            required: true,
        },
    },
    attendees: {
        email: {
            type: String,
            required: true,
        },
    },
})

module.exports = mongoose.model('Meeting', meetingSchema);

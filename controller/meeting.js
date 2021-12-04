const Meeting = require('../models/meeting')

const addMeeting = async (req, res) => {
    try {
        const addMeet = await Meeting.create(req.body)
        res.status(200).json({ addMeet })
    } catch (error) {
        res.status(400).json({ msg: error })
    }
}

const getAllMeeting = async (req, res) => {
    try {
        res.status(200).json('Get all Meeting')
    } catch (error) {
        res.status(400).json({ msg: error })
    }
}

const UpdateMeeting = async (req, res) => {
    try {
        res.status(200).json('Update Meeting')
    } catch (error) {
        res.status(400).json({ msg: error })
    }
}
const deleteMeeting = async (req, res) => {
    try {
        res.status(200).json('Delete Meeting')
    } catch (error) {
        res.status(400).json({ msg: error })
    }
}

module.exports = { addMeeting, getAllMeeting, UpdateMeeting, deleteMeeting }
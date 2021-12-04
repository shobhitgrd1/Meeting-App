const jwt = require('jsonwebtoken')
require('dotenv').config();

const auth = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith('Bearer')) {
            res.status(401).send('Authentication invalid')
        }
        const token = authHeader.split(" ")[1]
        try {
            const payload = jwt.verify(token, process.env.JWT_SECRET)
            req.user = {userId:payload.userId, name:payload.name}
        } catch (error) {
            res.status(401).send('Authentication invalid')
        }
        next()
    } catch (error) {
        res.status(401).send('Authentication invalid')
    }
}

module.exports = auth;
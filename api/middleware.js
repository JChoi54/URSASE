const jwt = require('jsonwebtoken');
const config = require('./config');
const User = require('./db/models/User')

const isAuthenticated = async function (req, res, next) {
    const token = req.cookies.token;
    if (!token) {
        res.sendStatus(401)
    } else {
        jwt.verify(token, config.jwt.secret, async function (err, decoded) {
            if (err) {
                res.sendStatus(401)
            } else {
                req.email = decoded.email;
                const user = await User.findOne({where: {email: req.email}})

                if (user !== null) {
                    next()
                } else {
                    res.sendStatus(401)
                }
            }
        });
    }
}
module.exports = isAuthenticated;
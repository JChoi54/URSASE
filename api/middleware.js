const jwt = require('jsonwebtoken');
const config = require('./config');
const User = require('./db/models/User')

const isAuthenticated = function (req, res, next) {
    const token = req.cookies.token;
    if (!token) {
        res.status(401).send('No token provided');
    } else {
        jwt.verify(token, config.jwt.secret, async function (err, decoded) {
            if (err) {
                res.status(401).send('Invalid token');
            } else {
                req.email = decoded.email;
                const user = await User.findOne({where: {email: req.email}})

                if (user !== null) {
                    next()
                } else {
                    res.status(401).send('User does not exist')
                }
            }
        });
    }
}
module.exports = isAuthenticated;
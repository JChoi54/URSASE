const jwt = require('jsonwebtoken');
const config = require('./config');

const withAuth = function(req, res, next) {
    const token = req.cookies.token;
    if (!token) {
        res.status(401).send('No token provided');
    } else {
        jwt.verify(token, config.jwt.secret, function(err, decoded) {
            if (err) {
                res.status(401).send('Invalid token');
            } else {
                req.email = decoded.email;
                next();
            }
        });
    }
}
module.exports = withAuth;
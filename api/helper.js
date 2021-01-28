module.exports.isDevelopment = function () {
    return process.env.NODE_ENV || 'development'
}

module.exports.requireHTTPS = function (req, res, next) {
    if (process.env.NODE_ENV === 'production') {
        if (req.headers['x-forwarded-proto'] !== 'https')
            // the statement for performing our redirection
            return res.redirect('https://' + req.headers.host + req.url);
        else
            return next();
    } else
        return next();
}
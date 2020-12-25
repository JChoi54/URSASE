var express = require('express');
var router = express.Router();

router.get('/register', function(req, res, next) {
    res.send('Placeholder for account registration on backend.');
});

router.get('/login', function(req, res, next) {
    res.send('Placeholder for account login on server end.');
});

module.exports = router;
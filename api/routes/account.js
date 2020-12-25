var express = require('express');
var router = express.Router();

const mysql = require('mysql');
const db = require('../db/db');

router.get('/register', function(req, res, next) {
    db.query('SELECT * FROM user', function(err, result) {
        if (err) throw err;
        res.send(result)
    })
});

router.get('/login', function(req, res, next) {
    db.query('SELECT * FROM user', function(err, result) {
        if (err) throw err;
        res.send(result)
    })
});

module.exports = router;
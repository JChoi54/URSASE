const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

const mysql = require('mysql');
const db = require('./db/db');

const app = express();

// View Engine Setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Express Setup
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Body Parser
const bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// bcrypt
const bcrypt = require('bcrypt')
const saltRounds = 10;

app.post('/api/signin', async function (req, res) {
    let email = req.body.email
    let password = req.body.password

    // STEP 1: Find user by email in database.
    try {
        db.query("SELECT * FROM users WHERE emailaddress=?", [email], async function (err, results, fields) {
            const user = results[0]

            if (user !== undefined) {
                // STEP 2: Compare passwords in database with hash.
                const hash = await bcrypt.hash(password, saltRounds);

                bcrypt.compare(user.password, hash, function (err, result) {
                    if (err) throw err;

                    if (result) {
                        // STEP 3: Log the user in.
                        res.send("Password is correct.")
                    } else {
                        res.send("Password is incorrect.")
                    }
                });
            }
            else {
                res.send("User does not exist.")
            }
        })
    } catch (e) {
        console.error("/api/signin: " + e.message)
    }
})

app.post('/api/signout', function (req, res) {
    console.log(req.body);
    res.send("")

    // STEP 1: Check if user was already signed on through session cookie.

    // STEP 2:
})

app.post('/api/signup', function (req, res) {
    console.log(req.body);

    let email = req.body.email
    let password = req.body.password

    // STEP 1: Check if user already exists on the database.

    // STEP 2: If user does not already exists, hash password in bcrypt.

    // TODO: Use the user model defined under db/models

    // STEP 3: Once hash is completed, create the user model and store the new user into the database.

    // TODO: Add email verification step. Generate email verification token and add it to Step 3.

    // STEP 4: Send response back to react letting them know to verify their email.

    // STEP 4b: Send email to user with verification email letting them know they need to verify.
})

app.post('/api/verifyemail', function (req, res) {
    console.log(req.body);

    // STEP 1: Check if the email verification token exists.

    // STEP 2: If verification token exists, nullify the verification token, and set email verification variable to true in database.

    // STEP 3: Send response to react letting them know they verified their email successfully, and redirect to login page.

})

module.exports = app;

const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

const mysql = require('mysql2');
const {QueryTypes} = require("sequelize");
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

// Database Models
const User = require('./db/models/User')

// Cryptography
const jwt = require("jsonwebtoken");

// User Configuration (contains application secret)
const config = require('./config');

// Model Initialization
async function initializeTables() {
    await db.sequelize.sync({alter: true})
}

initializeTables().then(res => {
    console.log("[Sequelize]: Successfully synced tables. Turn this off in production in order to avoid data loss.")
})

// Routes
app.post('/api/signin', async function (req, res) {
    let email = req.body.email
    let password = req.body.password

    // STEP 1: Find user by email in database.
    try {
        db.sequelize.query("SELECT * FROM users WHERE email=?", {
            replacements: [email],
            type: QueryTypes.SELECT,
            model: User
        }).then(async function (users) {
            if (users.length > 0) {
                const user = users[0]

                // STEP 2: Compare passwords in database with hash.
                user.isCorrectPassword(password, function (err, result) {
                    if (result) {
                        // STEP 3: Log the user in.
                        // TODO: Create option to check off remember me
                        const token = jwt.sign({email}, config.jwt.secret, {
                            expiresIn: '1h'
                        })

                        // STEP 4: Sends generated token to front-end.
                        res.cookie('token', token, { httpOnly: true }).sendStatus(200);
                    }
                    else if (err) {
                        res.status(500).json({
                            error: 'Internal Server Error. Please try again.'
                        })
                    }
                    else {
                        res.status(401).json({
                            error: 'Incorrect Email or Password.'
                        })
                    }
                })
            } else {
                res.status(401).json({
                    error: 'Incorrect Email or Password.'
                })
            }
        });
    } catch (e) {
        res.status(500).json({
            error: 'Internal Server Error, please try again.'
        })
    }
})

app.post('/api/signout', function (req, res) {
    console.log(req.body);
    res.send("")

    // STEP 1: Check if user was already signed on through session cookie.

    // STEP 2:

})

app.post('/api/signup', async function (req, res) {
    let email = req.body.email
    let password = req.body.password

    // STEP 1: Check if user already exists on the database.
    try {
        db.connection.query("SELECT * FROM users WHERE email=?", [email], async function (err, results) {
            console.log(results)

            if (results.type === undefined && !Array.isArray(results) || Array.isArray(results) && results.length === 0) {
                // STEP 2: If user does not already exists, hash password in bcrypt.
                const hash = await bcrypt.hash(password, saltRounds);

                // STEP 3: Once hash is completed, create the user model and store the new user into the database.
                await User.create({
                    id: null,
                    email: req.body.email,
                    password: hash,
                    firstName: req.body.firstName,
                    lastName: req.body.lastName,
                    verified: true, // TODO: Make it so user is not automatically verified.
                    verifyToken: null // TODO: Instead of making it a link verify token, make it a code and ask user to activate through a page.
                })

                // TODO: Add email verification step. Generate email verification token and add it to Step 3.

                // STEP 4: Send response back to react letting them know to verify their email.

                // STEP 4b: Send email to user with verification email letting them know they need to verify.

                res.send("Successfully created user.")
            } else {
                res.send("Email already in-use.")
            }
        })
    } catch (e) {
        console.error("/api/signup: " + e.message)
    }
})

app.post('/api/verifyemail', function (req, res) {
    console.log(req.body);

    // STEP 1: Check if the email verification token exists.

    // STEP 2: If verification token exists, nullify the verification token, and set email verification variable to true in database.

    // STEP 3: Send response to react letting them know they verified their email successfully, and redirect to login page.

})

module.exports = app;

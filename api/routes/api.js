const express = require('express');
const router = express.Router();

// Body Parser
const bodyParser = require('body-parser')
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}));

// Sequelize
const {QueryTypes} = require("sequelize");
const db = require('../db/db');

// bcrypt
const bcrypt = require('bcrypt')
const saltRounds = 10;

// Database Models
const User = require('../db/models/User')
const Projects = require('../db/models/Project')

// Cryptography
const jwt = require("jsonwebtoken");

// User Configuration (contains application secret)
const config = require('../config');

// Model Initialization
async function initializeTables() {
    await db.sequelize.sync({alter: true})
}

initializeTables().then(res => {
    console.log("[Sequelize]: Successfully synced tables. Turn this off in production in order to avoid data loss.")
})

// Routes for non-authenticated users.
router.post('/signin', async function (req, res) {
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
                        res.cookie('token', token, {httpOnly: true})

                        res.status(200).json({
                            error: 'Redirecting...'
                        })
                    } else if (err) {
                        res.status(500).json({
                            error: 'Internal Server Error. Please try again.'
                        })
                    } else {
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

router.post('/signup', async function (req, res) {
    let email = req.body.email
    let password = req.body.password

    if (!email.split('@')[1].includes('rochester.edu')) {
        res.status(400).send("Email must be a University Email.")
    } else {
        // STEP 1: Check if user already exists on the database.
        try {
            db.sequelize.query("SELECT * FROM users WHERE email=?", {
                replacements: [email],
                type: QueryTypes.SELECT,
                model: User
            }).then(async function (users) {
                if (users.length === 0) {
                    // STEP 2: If user does not already exists, hash password in bcrypt.
                    const hash = await bcrypt.hash(password, saltRounds);

                    // STEP 3: Once hash is completed, create the user model and store the new user into the database.
                    await User.create({
                        id: null,
                        email: req.body.email,
                        password: hash,
                        firstName: req.body.firstName,
                        lastName: req.body.lastName,
                        isAlumni: req.body.isAlumni,
                        verified: true, // TODO: Make it so user is not automatically verified.
                        verifyToken: null // TODO: Instead of making it a link verify token, make it a code and ask user to activate through a page.
                    })

                    // TODO: Add email verification step. Generate email verification token and add it to Step 3.

                    // STEP 4: Send response back to react letting them know to verify their email.

                    // STEP 4b: Send email to user with verification email letting them know they need to verify.
                    res.status(201).send("Successfully created user.")
                }
            })
        } catch (e) {
            console.error("/api/signup: " + e.message)
        }
    }
})

router.post('/verifyemail', function (req, res) {
    console.log(req.body);

    // STEP 1: Check if the email verification token exists.

    // STEP 2: If verification token exists, nullify the verification token, and set email verification variable to true in database.

    // STEP 3: Send response to react letting them know they verified their email successfully, and redirect to login page.

})

const nodemailer = require('nodemailer')

// create reusable transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
        user: '',
        pass: '',
    },
    secure: true,
});

router.post('/contactus', async function (req, res) {
    let name = req.body.name
    let email = req.body.email
    let message = req.body.message

    if (name !== null && email !== null && message !== null) {
        /*const mailData = {
            from: email,
            to: 'uofrsase@gmail.com',
            subject: 'Website | Contact Us: ' + name,
            text: message,
        };

        // TODO: This is disabled for now because we need a email server.
        await transporter.sendMail(mailData, function (err, info) {
            if(err)
                console.log(err)
            else
                console.log(info);
        });*/

        res.json({
            errorName: false,
            errorEmail: false,
            errorMessage: false,
            response: "Our email server is down currently. Please email us your message at uofrsase@gmail.com."//"Your message was sent!"
        })
    } else {
        res.json({
            errorName: name === null,
            errorEmail: email === null,
            errorMessage: message === null,
            response: "Invalid Input"
        })
    }
})

// Secured Routes with Authentication Required.
const isAuthenticated = require('../middleware')

router.get('/signout', isAuthenticated, function (req, res) {
    res.clearCookie("token")
    res.sendStatus(200);
})

router.get('/checkToken', isAuthenticated, function (req, res) {
    res.sendStatus(200)
})

router.get('/profile', isAuthenticated, function (req, res) {
    let userId = req.query.id

    // If undefined, query the logged on user. Otherwise query the user by the id.
    if (userId === undefined) {
        User.findOne({
            where: {
                email: req.email
            }
        }).then(user => {
            res.json({
                user: user,
                isMe: true
            })
        }).catch(_ => {
            res.sendStatus(400)
        })
    } else {
        User.findOne({
            where: {
                id: userId
            }
        }).then(user => {
            console.log(req.email)
            if (req.email === user.email) {
                res.json({
                    user: user,
                    isMe: true
                })
            } else {
                res.json({
                    user: user,
                    isMe: false
                })
            }
        }).catch(_ => {
            res.sendStatus(400)
        })
    }
})

router.get('/undergraduates', isAuthenticated, function (req, res) {
    // TODO: Only return all completed profiles.
    User.findAll({
        where: {
            isAlumni: false
        }
    }).then(users => {
        res.json({
            undergraduates: users
        })
    }).catch(_ => {
        res.sendStatus(400)
    })
})

router.get('/alumnis', isAuthenticated, function (req, res) {
    User.findAll({
        where: {
            isAlumni: true
        }
    }).then(users => {
        res.json({
            alumnis: users
        })
    }).catch(_ => {
        res.sendStatus(400)
    })
})


router.post('/uploadResumes', isAuthenticated, function (req, res) {

})


router.put('/uploadProjects', isAuthenticated, function (req, res) {

})

router.put('/editProfile', isAuthenticated, function (req, res) {

})

router.put('/changePassword', isAuthenticated, function (req, res) {

})

module.exports = router;
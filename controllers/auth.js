const db = require('../models/index');
const bcrypt = require('bcryptjs');
const users = db.users;

// crud for auth
exports.authController = {
    // signUp
    signUp: (req, res) => {
        const userBody = req.body;
        userBody.password = bcrypt.hashSync(userBody.password, 10);
        users.create(userBody).then((newUser) => {
            res.status(200).json({ message: "user created", newUser });
        }).catch((err) => {
            const errorObj = {};
            err.errors.map(error => {
                errorObj[error.path] = error.message;
            })
            res.status(400).send(errorObj);
            console.log(err);
        });
    },
    // signIn
    signIn: (req, res) => {
        users.findAll().then((user) => {
            res.status(200).send( user );
        }).catch((err) => {
            res.status(400).send('Could not get users');
            console.log(err);
        });
    },
    forgotPassword: (req, res) => {
        const userBody = req.body;
        users.create(userBody).then((newUser) => {
            res.status(200).json({ message: "user created", newUser });
        }).catch((err) => {
            const errorObj = {};
            err.errors.map(error => {
                errorObj[error.path] = error.message;
            })
            res.status(400).send(errorObj);
            console.log(err);
        });
    },
    
}

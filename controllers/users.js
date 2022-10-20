const db = require('../models/index');
const users = db.users;

// crud for users
exports.userController = {
    // create user
    create: (req, res) => {
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
    // get all users
    getAll: (req, res) => {
        users.findAll().then((user) => {
            res.status(200).send( user );
        }).catch((err) => {
            res.status(400).send('Could not get users');
            console.log(err);
        });
    },
    // get user by id
    getById: (req, res) => {
        users.findOne({ where: { id: req.params.id } }).then((user) => {
            if (user == undefined) {
                res.status(404).send('User not found');
            }
            res.status(200).send( user );
        }).catch((err) => {
            res.status(400).send('Could not get user');
            console.log(err);
        });
    },
    // update user
    update: (req, res) => {
        users.update(req.body, { where: { id: req.params.id } }).then((user) => {
            res.status(200).send( user );
        }).catch((err) => {
            res.status(400).send('Could not update user');
            console.log(err);
        });
    },
}

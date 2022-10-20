const db = require('../models/index');
const roles = db.roles;

// crud for roles
exports.userController = {
    // create user
    create: (req, res) => {
        const userBody = req.body;
        roles.create(userBody).then((newUser) => {
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
    // get all roles
    getAll: (req, res) => {
        roles.findAll().then((user) => {
            res.status(200).send( user );
        }).catch((err) => {
            res.status(400).send('Could not get roles');
            console.log(err);
        });
    },
    // get user by id
    getById: (req, res) => {
        roles.findOne({ where: { id: req.params.id } }).then((user) => {
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
        roles.update(req.body, { where: { id: req.params.id } }).then((user) => {
            res.status(200).send( user );
        }).catch((err) => {
            res.status(400).send('Could not update user');
            console.log(err);
        });
    },
}

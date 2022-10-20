var express = require('express');
const db = require('../models/index');
var router = express.Router();
const { userController } = require('../controllers/users');

// create
router.post('/', userController.create);
// get all
router.get('/', userController.getAll);

// get by id
router.get('/:id', userController.getById);
// update by id
router.put('/:id', userController.update);


/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

// router.get("/user", async (req, res) => {
//   try {
//     const users = await db.users.findAll();
//     res.status(200).json({ users });
//   } catch (err) {
//     console.log(err);
//   }
//   // res.send('e with a work');
// });

// router.post("/user", async (req, res) => {
//   try {
//     const { firstName, lastName, email, } = req.body;
//     const newUser = await db.users.create({
//       firstName,
//       lastName,
//       email,
//     });
//     res.status(200).json({ message: "user created", newUser });
//   } catch (err) {
//     console.log(err);
//   }
// });


console.log(db.users, "db");


module.exports = router;

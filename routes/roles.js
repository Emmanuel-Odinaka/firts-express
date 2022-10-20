var express = require('express');
const db = require('../models/index');
var router = express.Router();
const { roleController } = require('../controllers/roles');

// create
router.post('/', roleController.create);
// get all
router.get('/', roleController.getAll);

// get by id
router.get('/:id', roleController.getById);
// update by id
router.put('/:id', roleController.update);


/* GET roles listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

// router.get("/role", async (req, res) => {
//   try {
//     const roles = await db.roles.findAll();
//     res.status(200).json({ roles });
//   } catch (err) {
//     console.log(err);
//   }
//   // res.send('e with a work');
// });

// router.post("/role", async (req, res) => {
//   try {
//     const { firstName, lastName, email, } = req.body;
//     const newrole = await db.roles.create({
//       firstName,
//       lastName,
//       email,
//     });
//     res.status(200).json({ message: "role created", newrole });
//   } catch (err) {
//     console.log(err);
//   }
// });


console.log(db.roles, "db");


module.exports = router;

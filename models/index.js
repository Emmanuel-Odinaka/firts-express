const Sequelize = require('sequelize');
const sequelize = new Sequelize('odinaka', 'Emma', 'Shams@123', {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

sequelize.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    }).catch(err => {
        console.error('Unable to connect to the database:', err);
    });

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.users = require('./users')(sequelize, Sequelize);
db.roles = require('./roles')(sequelize, Sequelize);
db.classes = require('./classes')(sequelize, Sequelize);
db.students = require('./students')(sequelize, Sequelize);

// one to one mapping
// db.roles.hasOne(db.users);
// db.users.belongsTo(db.roles);

db.users.hasOne(db.students);
db.students.belongsTo(db.users);

// one to many mapping
db.classes.hasMany(db.students);
db.students.belongsTo(db.classes);

// many to many mapping
db.roles.belongsToMany(db.users, {through: 'usersRole'});
db.users.belongsToMany(db.roles, {through: 'usersRole'});

module.exports = db;
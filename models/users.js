module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('user', {
        // attributes
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
            // unique: true
        },
        lastName: {
            type: DataTypes.STRING
            // allowNull defaults to true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isEmail: true,
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },

    }, {
        // options
        // timestamps: false
    });
    return User;
};
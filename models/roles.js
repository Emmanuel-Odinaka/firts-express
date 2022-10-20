module.exports = (sequelize, DataTypes) => {
    const Role = sequelize.define('role', {
        // attributes
        roleName: {
            type: DataTypes.STRING,
            allowNull: false,
            // unique: true
        },
        roleDescription: {
            type: DataTypes.STRING
            // allowNull defaults to true
        },

    }, {
        // options
        // timestamps: false
    });
    return Role;
};
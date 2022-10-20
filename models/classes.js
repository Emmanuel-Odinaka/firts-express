module.exports = (sequelize, DataTypes) => {
    const Class = sequelize.define('class', {
        // attributes
        className: {
            type: DataTypes.STRING,
            allowNull: false,
            // unique: true
        },
        classDescription: {
            type: DataTypes.STRING
            // allowNull defaults to true
        },

    }, {
        // options
        // timestamps: false
    });
    return Class;
};
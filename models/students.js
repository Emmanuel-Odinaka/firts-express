module.exports = (sequelize, DataTypes) => {
    const Student = sequelize.define('student', {
        // attributes
        highestQualification: {
            type: DataTypes.STRING,
            allowNull: false,
            // unique: true
        },
        

    }, {
        // options
        // timestamps: false
    });
    return Student;
};
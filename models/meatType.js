module.exports = function (sequelize, DataTypes) {
    //-----------------

    const Meats = sequelize.define('Meats', {
        name: DataTypes.STRING,
    });
    //-----------------

    Meats.associate = (models) => {
        Meats.belongsToMany(models.Burgers, {
            through: 'burgerMeats',
            as: 'Burgers',
            foreignKey: 'meatId',
            // onDelete: 'cascade'
        });
    };
    //-----------------

    return Meats;
};

// *********************************************************************************
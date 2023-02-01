const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connections");

class Recipe extends Model {}

Recipe.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        directions: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                max: 400
            }          
        },
        category: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        prep_time: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: "recipe",
    },
);

module.exports = Recipe;
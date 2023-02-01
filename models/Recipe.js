//table definitions, seeds is optional if we want to create a full table 

const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

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
        category: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        //the users can write directions without restriction
        directions: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                max: 400
            }          
        },
        //chosen language set to english
        isIn: {
            args: [['en']],
            msg: "Directions must be English"
          }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: "recipe",
    },
);

module.exports = Recipe;
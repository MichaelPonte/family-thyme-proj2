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
        //datatype=array or string? because user will be writing paragraph 
        directions: {
            type: DataTypes.STRING,
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
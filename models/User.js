const { Model, DataTypes } = require('sequelize');
const bycrpt = require('bycrypt');
const sequelize = require('../config/connection'); 

class User extends Model {
    checkPassword(loginPassword) {
        return bycrpt.compareSync(loginPassword, this.password);
    }
}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                notNull: {
                  msg: 'Please enter username'
                }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [4]
            },
        },
    }
},

{
    hooks: {
        async beforeCreate(newUserData) {
            newUserData.password = await bycrpt.hash(newUserData.password, 10);
            return newUserData;
        },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user',
}
);

module.exports = User;


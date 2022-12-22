const sequelize= require("../sequelize");
const { DataTypes } = require("sequelize");


const MembruEchipa = sequelize.define("membruEchipa",{
        numeMembru:
        {
            type: DataTypes.STRING,
            allowNull: false,
        },
        prenumeMembru:
        {
            type: DataTypes.STRING,
            allowNull: false,
        },
        emailMembru:
        {
            type: DataTypes.STRING,
            allowNull: false,
            validate:
            {
                isEmail: true
            }
        }
    })
    //{tableName: "MembruEchipa"})
module.exports = MembruEchipa;
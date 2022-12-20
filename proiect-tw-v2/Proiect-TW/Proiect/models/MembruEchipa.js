const sequelize = require("../sequelize");
const {DataTypes} = require("sequelize");


const membruEchipa = sequelize.define("MembruEchipa",{
        idMembru:
        {
            type: DataTypes.INTEGER,
            //defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            autoIncrement: true
        },
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
            },
        },
        
    },
    {tableName: "MembruEchipa"})
module.exports = membruEchipa;
const sequelize = require("../sequelize");
const {DataTypes} = require("sequelize");

const Proiect = sequelize.define("Proiect",
    {
        idProiect:{
            type: DataTypes.INTEGER,
            //defaultValue: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        numeProiect: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [5,50]
            }
        },
        numeEchipa:{
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [2,50]
            },
        },
    },
    {tableName: "Proiect"})
module.exports = Proiect;
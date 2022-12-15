const sequelize = require("../sequelize");
const {DataTypes} = require("sequelize");

const bug = sequelize.define("Bug",{
        idBug:
        {
            type: DataTypes.INTEGER,
            //defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            autoIncrement: true
        },
        numeBug:
        {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [5,100]
            }
        },
        descriereBug:
        {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [100,10000]
            }
        },
        severitateBug:
        {
            type: DataTypes.ENUM,
            allowNull: false,
            values: ['LOW', 'MEDIUM', 'HIGH']
        },
        prioritateBug:
        {
            type: DataTypes.BOOLEAN,
            allowNull: false
        }
    },
    {tableName: "Bug"})
module.exports = bug;
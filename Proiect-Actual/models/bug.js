const sequelize = require("../sequelize");
const {DataTypes} = require("sequelize");

const Bug = sequelize.define("bug",{
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
                len: [10,10000]
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
    })
//    {tableName: "Bug"})

module.exports = Bug;
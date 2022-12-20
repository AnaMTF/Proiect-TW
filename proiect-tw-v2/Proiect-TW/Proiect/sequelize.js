const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "../sqlite/test.db"
});

sequelize.sync({alter: true}).then(()=>{
    console.log("Toate modelele au fost sincronizate.")
})

module.exports = sequelize;
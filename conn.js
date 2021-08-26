const sequelize = require("sequelize");


module.exports = new sequelize(process.env.DBURL,{
    dialect:"mysql",
    define:{
        timeStamp:true
    },
    logging:false
})
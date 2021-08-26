const sequelize = require("sequelize");



module.exports = new sequelize(process.env.DBNAME,process.env.DBUSER,process.env.DBPASSWORD,{
    dialect:"mysql",
    host:process.env.DBHOST,

    define:{
        timeStamp:true,
    },
    logging:false
})
const db = require("../conn");

const { DataTypes} = require("sequelize");
const uuid = require("uuid");
const User = require("./m.user");

const Room = db.define("room",{
    id:{
      type:DataTypes.INTEGER,
      autoIncrement:true,
      primaryKey:true
    },
    host:{
      type:DataTypes.STRING,
      required:true
    },
    roomId:{
      type:DataTypes.STRING,
      required:true,
      unique:true
    },
    topic:{
      type:DataTypes.STRING,
      required:true
    },
    speaker:{
        type:DataTypes.STRING,
        defaultValue:""
    },
    context:{
       type:DataTypes.STRING,
       required:true
    }
});


Room.sync();

module.exports = Room
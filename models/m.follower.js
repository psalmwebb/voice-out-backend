
const { DataTypes } = require("sequelize");
const db = require("../conn");

const Follower = db.define("follower",{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
      },
    followingId:{
       type:DataTypes.INTEGER
    },
    name:{
        type:DataTypes.STRING,
        required:true
    },
    avatar:{
        type:DataTypes.STRING,
        defaultValue:""
    }
})

Follower.prototype.toJSON=function(){

    return {...this.get(),id:undefined};
}


Follower.sync({force:true});



module.exports = Follower;


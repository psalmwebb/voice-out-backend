
const db = require("../conn");

const { DataTypes} = require("sequelize");
const Follower = require("./m.follower");

const User = db.define("user",{
    id:{
      type:DataTypes.INTEGER,
      autoIncrement:true,
      primaryKey:true
    },
    uuid:{
      type:DataTypes.UUID,
      defaultValue:DataTypes.UUIDV4
    },
    username:{
        type:DataTypes.STRING,
        required:true,
        unique:true
    },
    password:{
        type:DataTypes.STRING,
        required:true
    },
    avatar:{
        type:DataTypes.STRING
    }
});

User.prototype.toJSON=function(){

    return {...this.get(),id:undefined};
}

User.beforeCreate((user,_)=>{

    console.log("Caught");
})


User.sync();



module.exports = User;
const cookieParser = require("cookie-parser");
const Joi = require("@hapi/joi");
const utils = require("../utils/utils");
const User = require("../models/m.user");
const uuid = require("uuid");

module.exports = class {

    static get registerUser()
    {
        return async (req,res)=>{
          
           const userExist = await User.findOne({where:{username:req.body.username}});

           if(userExist){
              return res.status(400).json({message:"User already exist"});
           }

           try{
               const user = await User.create({username:req.body.username,password:req.body.password});

               res.status(200).json(user);

           }catch(err){
               res.status(500).json(err);
           }

        }
    }
}
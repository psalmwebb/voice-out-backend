
const cookieParser = require("cookie-parser");

const Follower = require("../models/m.follower");
const User = require("../models/m.user");
const Room = require("../models/m.room");
const { decodeJWT } = require("../utils/utils");

module.exports = class {

    static get findUser(){
       
        return async (req,res)=>{
          
           const {voiceOutToken} = req.cookies;

           if(!voiceOutToken) return res.json({error:"Could not find user"});

           const decodedToken = await decodeJWT(voiceOutToken);
        
           const user = await User.findOne({where:{uuid:decodedToken.id}});

           if(user){
               res.json(user);
           }
           else{
               res.json({error:"Could not find user"});
           }
        }
    }

    static get followUser(){

        return async (req,res)=>{

        }
    }

    static get createRoom(){

        return async (req,res)=>{
          
            const {roomId,host,topic,speaker,context} = req.body;

            const room = await Room.create({host,roomId,speaker,topic,context});

            res.status(200).json(room);
        }
    }

    static get findAllRoom()
    {
        return async (req,res)=>{

         try{
            const rooms = await Room.findAll();

            if(rooms){
                res.status(200).json(rooms);
            }
            else{
                res.status(200).json({error:"No room found"})
            }
         }
         catch(err){
             res.json(err);
         }
        }
    }

    static get findRoom()
    {

        return async (req,res)=>{

            const {roomId}  = req.params;

            const room = await Room.findOne({where:{roomId}});

            if(room){
               res.status(200).json(room);
            }
            else{
                res.json({error:"Invalid meeting ID"})
            }
        }
    }
    static get deleteRoom(){

        return async (req,res)=>{

            const {roomId} = req.params;

            const room = await Room.findOne({where:{roomId}});

            if(room){
                room.destroy().then(()=>{
                    res.status(200).json({message:"room destroyed successfully"});
                })
            }
            else{
                res.status(400).json({message:"could not find the room"});
            }

        }
    }


    // static get updateUserAvatar(){

    //     return async (req,res)=>{

    //         const {avatar} = req.body;
    //         const {uuid} = req.params;

    //         const user = await User.findOne({where:{uuid}})

    //         if(user){
    //             user.avatar = avatar

    //             user.save().then(()=>{
    //                 res.status(200).json({message:"Profile image saved successfully"});
    //             })
    //         }
    //     }
    // }

}
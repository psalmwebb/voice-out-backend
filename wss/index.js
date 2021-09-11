
const socket = require("socket.io");

module.exports =(server)=>{


    const io = socket(server,{
        cors:{
            origin:["https://voice-out.vercel.app","http://localhost:3000"]
        }
    });


    io.on("connection",(socket)=>{

        const {roomId,userId} = socket.handshake.query;

        socket.join(roomId);
        socket.join(userId);

        // console.log("Client connected ",socket.id);


        socket.on("user-joined",(userId)=>{
          
            socket.broadcast.to(roomId).emit("user-joined",userId);
        })

        socket.on("user-details",(userDetailsObj)=>{
            socket.broadcast.to(roomId).emit("user-details",userDetailsObj);
        })

        socket.on("chat",messageObj=>{
            
            socket.broadcast.to(roomId).emit("chat",messageObj);
        })

        socket.on("remote-user-details",(remoteUserDetails)=>{
            socket.broadcast.to(remoteUserDetails.receiver).emit("remote-user-details",remoteUserDetails);
        })

        socket.on("user-leave",(userId)=>{
           
            socket.broadcast.to(roomId).emit("user-leave",userId);
        }) 

        socket.on("disconnect",()=>{
            console.log("Client disconnected : ",socket.id)

            socket.broadcast.to(roomId).emit("user-disconnected",userId);
        })
    })
}
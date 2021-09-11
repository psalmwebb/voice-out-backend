
const {decodeJWT} = require("../utils/utils");

module.exports.cookieSessionHandler=function()
{
    return async (req,res,next)=>{
  
        const voiceOutToken = req.headers['authorization']

        console.log(voiceOutToken)
        if(voiceOutToken){
            // console.log("yes")
            const decodedString = await decodeJWT(voiceOutToken);
    
            req.session = {passport:{user:decodedString.id}};
        }
        next()
    }
}
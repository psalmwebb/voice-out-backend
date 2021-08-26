
const {decodeJWT} = require("../utils/utils");

module.exports.cookieSessionHandler=function()
{
    return async (req,res,next)=>{
  
        const voiceOutToken = req.cookies.voiceOutToken
    
        if(voiceOutToken){
            const decodedString = await decodeJWT(voiceOutToken);
    
            req.session = {passport:{user:decodedString.id}};
        }
        next()
    }
}

const jwt = require("jsonwebtoken");


module.exports.generateJWT=(id)=>{

    return jwt.sign({id},"psalm webb",{
       expiresIn:60 * 60 * 24 * 1000
    })
}

module.exports.decodeJWT= async (token)=>{
   
    try{

        const decodedToken = await jwt.verify(token,"psalm webb")

        return decodedToken
    }
    catch(err){
        console.log(err);
    }
}
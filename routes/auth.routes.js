
const express = require("express");

const router = express.Router();

const passport = require("passport");

const {generateJWT} = require("../utils/utils");

const cookieParser = require("cookie-parser");

const validator = require("../utils/validator");

const controller = require("../controllers/auth.controller");
const schema = require("../utils/schema");

require("../config/passport-config");


router.get("/auth/google",passport.authenticate("google",{
    scope:['email','profile']
}
))


router.get("/auth/google/callback",passport.authenticate("google"),(req,res)=>{
 
    const encodedString = generateJWT(req.user.uuid);
    
    res.cookie("voiceOutToken",encodedString,{
        maxAge:1000 * 24 * 60 * 60,
        httpOnly:true
    })

    // res.redirect("http://localhost:3000/dashboard");
    res.redirect("https://voice-out.vercel.app/dashboard");
});



module.exports = router;
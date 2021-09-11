
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
    
    const parsed = Math.floor(Math.random() * 10e10).toString(32);

    res.redirect(`https://voice-out.vercel.app/${parsed}__${encodedString}`)

    // res.redirect(`http://localhost:3000/redirect/${parsed}__${encodedString}`)
});

module.exports = router;
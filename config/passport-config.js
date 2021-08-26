
const passport = require("passport");

const GoogleStrategy = require("passport-google-oauth2").Strategy;

const User = require("../models/m.user");
const uuid = require("uuid");


passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback",
    passReqToCallback : true
  },
  async function(req, accessToken, refreshToken, profile, done) {
  
     const {displayName} = profile;

     const avatar = profile.photos[0].value;

     let user = await User.findOne({where:{username:displayName}});

     if(user){
        return done(null,user);
     }

     const password = uuid.v4();

     user = await User.create({username:displayName,password,avatar});

     done(null,user);
  }
));



passport.serializeUser(function(user, done) {

    // console.log("serial")
    done(null, user.uuid);
});
  
passport.deserializeUser(async function(userId, done){

    const user = await User.findOne({where:{uuid:userId}})

    // console.log("deserial")

    done(null, user);
});
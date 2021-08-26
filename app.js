const express = require("express");

const cors = require("cors");
const passport = require("passport");

const app = express();

const cookieParser = require("cookie-parser");

const {cookieSessionHandler} = require("./middleware");

require("./conn");

require("dotenv").config();

const PORT = process.env.PORT || 5000

app.use(cors({
    origin:["https://voice-out.vercel.app"],
    credentials:true
}));

app.use(cookieParser());

app.use([express.json(),express.urlencoded({extended:false})]);

app.use(cookieSessionHandler());
app.use(passport.initialize());
app.use(passport.session());


app.use(require("./routes/auth.routes"),require("./routes/main.routes"));



const server = app.listen(PORT,()=> console.log("serving at port : ",PORT));


require("./wss")(server);
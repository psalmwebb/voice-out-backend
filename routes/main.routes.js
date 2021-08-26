
const express = require("express");

const router = express.Router();

// const path = require("path");

const controller = require("../controllers/main.controller");


router.use([express.json(),express.urlencoded({extended:false})]);


router.get("/find-user",controller.findUser);

router.post("/follow",controller.followUser);

router.post("/create-room",controller.createRoom);

router.get("/rooms",controller.findAllRoom);

router.get("/room/:roomId",controller.findRoom);

// router.patch("/update-avatar/:userId",controller.updateUserAvatar);

router.delete("/delete-room/:roomId",controller.deleteRoom);


module.exports = router;
const {createUser, getUsers , loginUser} = require("../controllers/authController")
const express = require("express")
const router = express.Router()
const authMiddleware = require("../middlewares/authMiddleware");

router.post("/register" , createUser),
router.get("/users" , authMiddleware , getUsers)
router.post("/login", loginUser)
module.exports = router;

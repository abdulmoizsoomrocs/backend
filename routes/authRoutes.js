const {createUser, getUsers , loginUser} = require("../controllers/authController")
const express = require("express")
const router = express.Router()

router.post("/register" , createUser),
router.get("/getAllUsers" , getUsers)
router.post("/login", loginUser)
module.exports = router;

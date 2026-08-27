const {createUser, getUsers} = require("../controllers/authController")
const express = require("express")
const router = express.Router()

router.post("/register" , createUser),
router.get("/getAllUsers" , getUsers)

module.exports = router;
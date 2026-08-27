const {createUser, getUsers , loginUser} = require("../controllers/authController")
const express = require("express")
const router = express.Router()
const authMiddleware = require("../middlewares/authMiddleware");
const rolesMiddleware = require("../middlewares/rolesMiddleware");





router.post("/register" , createUser),
router.get("/users" , authMiddleware , getUsers)
router.post("/login", loginUser)
router.get(
    "/admin",
    authMiddleware,
    rolesMiddleware("admin"),
    (req, res) => {
        res.json({
            message: "Welcome Admin"
        });
    }
);


module.exports = router;

const User = require('../models/users')
const bcrypt = require("bcrypt")
const createUser = async (req , res) =>{
    const user = await User.findOne({email : req.body.email})
    if(user){
        return res.status(409).json({
            message : "User already Exist"
        });
    }
    const hashedPassword = await bcrypt.hash(req.body.password , 10);
    const newUser = await User.create({
        name : req.body.name,
        email : req.body.email,
        password : hashedPassword
    })
    return res.status(201).json({
        message: "User Created"
    })
}

const getUsers = async(req , res) =>{
    const user = await User.find()
    res.send(user)
}



module.exports = {
  createUser,
  getUsers
}
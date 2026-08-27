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

const loginUser = async(req , res) => {

    const email   =  req.body.email
    const password = req.body.password 

    const user = await User.findOne({email: email})

    if(!(user)){
       return res.status(401).json({
        message: "Invalid email or password"
        })
    }

    const found = await bcrypt.compare(
        password , 
        user.password
    )

    if(!found){
        return res.status(401).json({
        message: "Invalid email or password"
        })
    }
    return res.status(200).json({
    message: "Login successful",
    email : email
    });


}

module.exports = {
  createUser,
  getUsers,
  loginUser
}
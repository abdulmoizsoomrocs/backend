const dns = require("dns")
const mongoose = require("mongoose");

dns.setServers(["8.8.8.8"] , ["1.1.1.1"])

const connectDB = () =>{
    return mongoose.connect(process.env.MONGO_URI);
}

module.exports = connectDB;

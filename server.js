require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const productRoutes = require("./routes/productRoutes");
const authRoutes = require("./routes/authRoutes");
const PORT = process.env.PORT
const app = express()
const errorMiddleware = require("./middlewares/errorMiddleware");
app.use(express.json());
app.use("/api/products", productRoutes);
app.use("/api/auth" , authRoutes);
app.use(errorMiddleware);


connectDB()
    .then(() => {
        console.log("MongoDB Connected");
    })
    .catch((err) => {
        console.log("MongoDB connection failed");
        console.log(err.message);
    });
app.get('/' , (req, res)=>{
    res.send("Hello old")
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
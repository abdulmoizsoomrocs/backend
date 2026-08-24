const errorMiddleware = (err , req , res , next) => {
    if(err.name == "CastError"){
        return res.status(404).json({
            message: "Invalid Product ID"
        });
    }

    res.status(500).json({
     message: "Internal Server Error"
    });

};
module.exports = errorMiddleware;

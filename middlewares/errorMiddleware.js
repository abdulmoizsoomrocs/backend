const errorMiddleware = (err , req , res , next) => {
    if(err.name == "CastError"){
        return res.status(404).json({
            message: "Invalid Product ID"
        });
    }
    if (err.name === "ValidationError") {
    return res.status(400).json({
        message: "Validation failed",
        errors: err.errors
    });
}

    res.status(500).json({
     message: "Internal Server Error"
    });

};
module.exports = errorMiddleware;

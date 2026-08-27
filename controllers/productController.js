const Product = require("../models/products")

const createProduct = async (req, res) => {

    const product = await Product.create({
        ...req.body,
        user: req.user.userId
    });

    res.status(201).json(product);
};

const getProducts = async (req, res) => {

    const filter = {};

    if (req.query.category) {
        filter.category = req.query.category;
    }

    if (req.query.inStock) {
        filter.inStock = req.query.inStock === "true";
    }

    if (req.query.minPrice || req.query.maxPrice) {

        filter.price = {};

        if (req.query.minPrice) {
            filter.price.$gte = Number(req.query.minPrice);
        }

        if (req.query.maxPrice) {
            filter.price.$lte = Number(req.query.maxPrice);
        }
    }

    const products = await Product.find(filter).populate("user","name email role");

    res.status(200).json(products);
};

const getProductById = async (req , res) =>{
    const products = await Product.findById(req.params.id)
    if(!(products)){
        return res.status(404).json({
            message: "product not found"
        })
    }
    res.status(200).json(products)
    console.log(products)
}

const updateProduct = async (req  ,res) =>{
        const product = await Product.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new : true}
        );
        res.status(200).json(product)
}

const deleteProduct  =async (req, res) =>{
    const product = await Product.findByIdAndDelete(req.params.id)
    
    if(!(product)){
        res.status(404).json({
            message : "Product NOT Found"
        })
    }
    res.status(204).json({
        product ,
        message: "Deleted Successfully"
    })
}

module.exports = {
    createProduct,
    getProducts,
    getProductById, 
    deleteProduct,
    updateProduct
}
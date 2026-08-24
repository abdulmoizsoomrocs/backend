const express = require("express")
const router = express.Router();
const {createProduct, updateProduct} = require("../controllers/productController")
const {getProducts , getProductById  ,deleteProduct} = require("../controllers/productController")
router.post('/' , createProduct);
router.get('/' , getProducts);
router.get('/:id' , getProductById);
router.delete('/:id', deleteProduct)
router.put('/:id', updateProduct)
module.exports =router;

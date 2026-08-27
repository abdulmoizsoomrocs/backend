const express = require("express")
const router = express.Router();
const {createProduct, updateProduct} = require("../controllers/productController")
const {getProducts , getProductById  ,deleteProduct} = require("../controllers/productController");
const asyncHandler = require("../utils/asyncHandler")
const authMiddleware = require("../middlewares/authMiddleware");

router.post('/' ,authMiddleware, asyncHandler(createProduct));
router.get('/' ,asyncHandler(getProducts));
router.get('/:id' , asyncHandler(getProductById));
router.delete('/:id', asyncHandler(deleteProduct))
router.put('/:id', asyncHandler(updateProduct))
module.exports =router;

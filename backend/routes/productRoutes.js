const express = require("express");
const router = express.Router();

const {
  getAllProducts,
  getProductById,
} = require("../controller/productControllers");

//@desc Get all the products from db
//@desc Get /api/products
//@access public

router.get("/", getAllProducts);

//@desc Get all the products from db
//@desc Get /api/products/:id
//@access public

router.get("/:id", getProductById);

module.exports = router;

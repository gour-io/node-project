const express = require("express");
const path = require("path");

const rootDir = require("../utils/path");
const {
  getAddProduct,
  postAddProduct,
  getProducts,
  getEditProduct,
  postEditProduct,
  deleteProduct,
} = require("../controllers/admin");

const router = express.Router();

// /admin/add-product => GET
router.get("/add-product", getAddProduct);

// /admin/add-product => POST
router.post("/add-product", postAddProduct);

// /admin/edit-product => GET
router.get("/edit-product/:productId", getEditProduct);

// /admin/edit-product => POST
router.post("/edit-product", postEditProduct);

// /admin/delete-product => POST
router.post("/delete-product", deleteProduct);

// /admin/products => GET
router.get("/products", getProducts);

module.exports = router;

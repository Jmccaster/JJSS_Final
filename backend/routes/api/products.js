const express = require("express");
const productController = require("../../controllers/api/productController");
const router = express.Router();

router.route("/seed").post(productController.seedProducts);

router.route("/").get(productController.getAllProducts);
router.route("/:gender").get(productController.getProducts);
router.route("/search/:searchTerm").get(productController.searchProducts);

module.exports = router;

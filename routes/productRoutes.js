const express = require("express");
const productController = require("../controller/ProductController");

  

const router = express.Router();

router.get("/shop", productController.traer)

module.exports = router;
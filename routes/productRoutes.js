const express = require("express");
const productController = require("../controller/ProductController");

  

const router = express.Router();

router.get("/shop", productController.traer)
router.get("/producto", productController.traerPorId)
router.post("/producto", productController.agregar)
router.delete("/producto", productController.eliminar)

module.exports = router;
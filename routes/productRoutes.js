const express = require("express");
const productController = require("../controller/ProductController");

const {reporteProductoAgregado, reporteProductoEliminado} = require ("../middlewares/reports")

  

const router = express.Router();

router.get("/shop", productController.traer)
router.get("/productos/:id_usuario", productController.traerPorUsuario)
router.get("/producto", productController.traerPorId)
router.post("/nuevoproducto", reporteProductoAgregado, productController.agregar)
router.delete("/producto/:id", reporteProductoEliminado, productController.eliminar)

module.exports = router;
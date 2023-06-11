const express = require("express");
const userController = require("../controller/userController");

const {
  verificaToken,
  credenciales,
} = require("../middlewares/indexValidator");

const {reporteLogin, reporteUsuarioCreado }= require("../middlewares/reports");
const router = express.Router();
router.get("/usuario/:id", userController.mostrarPorID);
router.get("/usuarios", verificaToken, userController.mostrar);
router.post("/usuarios", reporteUsuarioCreado, userController.crear);
router.post("/login", credenciales, reporteLogin, userController.login);

module.exports = router;

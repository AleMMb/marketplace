const express = require("express");
const indexController = require("../controller/indexController");

const {
  verificaToken,
  //credenciales,
} = require("../middlewares/indexValidator");

const {reporteLogin, reporteUsuarioCreado }= require("../middlewares/indexReports");
const router = express.Router();

router.get("/usuarios", verificaToken, indexController.mostrar);
router.post("/usuarios", reporteUsuarioCreado, indexController.crear);
router.post("/login", /*credenciales,*/ reporteLogin, indexController.login);

module.exports = router;

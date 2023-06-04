const { getProductos } = require("../services/products.services");

const productController = {
  traer: async (req, res) => {
    try {
      const productos = await getProductos();
      res.status(200).send(productos);
      console.log(productos);
    } catch (error) {
      res.estatus(error.code || 500).send(error.message);
    }
  },
};

module.exports = productController;

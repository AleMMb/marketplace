const {
  getProductos,
  getProducto,
  addProduct,
  deleteProduct,
} = require("../services/products.services");

const productController = {
  traer: async (req, res) => {
    try {
      const productos = await getProductos();
      res.status(200).send(productos);
    } catch (error) {
      res.estatus(error.code || 500).send(error.message);
    }
  },

  traerPorId: async (req, res) => {
    try {
      const id = req.body.id;
      const producto = await getProducto(id);
      res.status(200).send(producto);
      } catch (error) {
        res.estatus(error.code || 500).send(error.message)
      }
  },

  agregar: async (req, res) => {
    try {
      const { idUsuario, nombre, descripcion, precio, imagen } = req.body;
      await addProduct(idUsuario, nombre, descripcion, precio, imagen);
      res.send("Producto agregado exitosamente");
    } catch (error) {
      res.status(error.code || 500).send(error.message);
    }
  },

  eliminar: async (req, res) => {
    try {
      const { id } = req.body;
      await deleteProduct(id);
      res.send("Producto eliminado con exito");
    } catch {
      res.status(error.code || 500).send(error.message);
    }
  },
};

module.exports = productController;

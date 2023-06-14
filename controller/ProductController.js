const {
  getProductos,
  getProducto,
  addProduct,
  deleteProduct,
  getProductsByUser,
  updateProduct
} = require("../services/products.services");

const productController = {
  traer: async (req, res) => {
    try {
      const productos = await getProductos();
      res.status(200).send(productos);
    } catch (error) {
      res.status(error.code || 500).send(error.message);
    }
  },

  traerPorId: async (req, res) => {
    try {
      const id = req.params.id;
      const producto = await getProducto(id);
      res.status(200).send(producto);
      } catch (error) {
        res.status(error.code || 500).send(error.message)
      }
  },

  traerPorUsuario: async (req, res)=> {
    try{
      const id_usuario = req.params.id_usuario
      const productos = await getProductsByUser(id_usuario)
      res.status(200).send(productos)
      }catch(error){
        res.status(error.code || 500).send(error.message)
    }
  },

  agregar: async (req, res) => {
    try {
      const { id_usuario, nombre, descripcion, precio, imagen } = req.body;
      await addProduct(id_usuario, nombre, descripcion, precio, imagen);
      res.send("Producto agregado exitosamente");
    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  eliminar: async (req, res) => {
    try {
      const { id } = req.params;
      await deleteProduct(id);
      res.send("Producto eliminado con exito");
    } catch (error){
      res.status(error.code || 500).send(error.message);
    }
  },

  modificar: async (req, res) =>{
    try{
      const {nombre, descripcion, precio, id} = req.body;
      await updateProduct(nombre,descripcion,precio,id);
      res.send(`El producto ${id} ha sido modificado`);
      }catch(error){
        res.status(500).send(error.message);
      }
  }
};

module.exports = productController;

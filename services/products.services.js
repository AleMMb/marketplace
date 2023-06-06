const pool = require("../database/connection");

// ESTE TIENE LAS CONSULTAS


const getProductos = async () => {
    const consulta = "SELECT * FROM producto ORDER BY id DESC"
    const { rows: productos } = await pool.query(consulta)
    return productos
};

const getProducto = async (id) =>{
    const consulta = "SELECT * FROM producto WHERE id = $1"
    values = [id]
    const {rows: producto } = await pool.query(consulta, values)
    return producto
}


const addProduct = async ( idUsuario, nombre, descripcion, precio, imagen) => {
    const consulta = "INSERT INTO producto VALUES (DEFAULT, $1, $2, $3, $4, $5)"
    const values = [idUsuario, nombre, descripcion, precio, imagen]
    const result = await pool.query (consulta, values)
}


const deleteProduct = async (id) => {
    const consulta = "DELETE FROM producto WHERE id = $1"
    const values = [id]
    const result = await pool.query (consulta, values)
}

module.exports = { getProductos, getProducto, addProduct, deleteProduct };

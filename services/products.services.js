const pool = require("../database/connection");

// ESTE TIENE LAS CONSULTAS


const getProductos = async () => {
    const consulta = "SELECT * FROM producto ORDER BY id DESC"
    const { rows: productos } = await pool.query(consulta)
    console.log(productos)
    return productos
};



module.exports = { getProductos };

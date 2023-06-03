const pool = require("../database/connection");
const bcrypt = require("bcryptjs");

const getUsuario = async (email) => {
  const consulta = "SELECT * FROM usuarios WHERE email = $1";
  const values = [email];
  const { rows: usuario } = await pool.query(consulta, values);
  return usuario;
};

const verificarCredenciales = async (email, password) => {
  const values = [email];
  const consulta = "SELECT * FROM usuarios WHERE email = $1"; 
  const {
    rows: [usuario],
    rowCount,
  } = await pool.query(consulta, values); 

  const { password: passwordEncriptada } = usuario; 
  const passwordEsCorrecta = bcrypt.compareSync(password, passwordEncriptada);
  if (!passwordEsCorrecta || !rowCount)
    throw {
      code: 401,
      message: "Email o contraseña incorrecta",
    };
};

const registrarUsuario = async (usuario) => {
  let { nombre, apellido, email, password } = usuario;
  const passwordEncriptada = bcrypt.hashSync(password);
  password = passwordEncriptada;
  const values = [nombre, apellido, email, passwordEncriptada];
  const consulta = "INSERT INTO usuarios VALUES (DEFAULT, $1, $2, $3, $4)";
  await pool.query(consulta, values);
};

module.exports = { getUsuario, registrarUsuario, verificarCredenciales };

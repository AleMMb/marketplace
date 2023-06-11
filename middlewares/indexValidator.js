const jwt = require("jsonwebtoken");
const token_key = process.env.TOKENKEY



const credenciales = (req, res, next) => { 
  const { email, password } = req.body;  
  if (!email || !password) {
    res.status(401).send({ message: "Usuario y contraseña son datos obligatorios." });
    return;
  }
  next();
};

const verificaToken = async (req, res, next) => {
  try {
    const Authorization = req.header("Authorization")
    const token = Authorization.split("Bearer ")[1]
    jwt.verify(token, token_key)
    if (!token) {
      res.status(401).send({ message: "Se necesita un token para continuar" });
      return;
    }
    next();

  } catch (error) {
    res.status(500).send({ message: error });
    console.error(`error al intentar validar el token: ${error}`);
  }
};





module.exports = {credenciales, verificaToken}
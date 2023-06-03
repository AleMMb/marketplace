const jwt = require("jsonwebtoken");
const token_key = process.env.TOKENKEY


/* para la implementación del midleware credenciales , que segun el desafío debía comprobar la existencia de la crenciales
   (distinto a si son válidas o no, tuve que moificar la view Login en el front, porque esa comprobación ya estaba)
   pero igual, creo que se entiende la idea de implementar un middleware :P */

/*const credenciales = (req, res, next) => { 
  const { email, password } = req.body;  
  if (!email || !password) {
    res.status(401).send({ message: "Usuario y contraseña son datos obligatorios." });
    return;
  }
  next();
};*/

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





module.exports = { verificaToken}
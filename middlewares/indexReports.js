const reporteLogin = (req, res, next) => {
  const parametros = req.body.email;
  const url = req.url;
  console.log(
    `
    Hoy ${new Date()}
    Se ha recibido una consulta (GET) en la ruta ${url}
    el usuario ${parametros} ha iniciado sesion`,
  );

  next();
};


const reporteUsuarioCreado = (req, res, next) => {
    const parametros = req.body.email;
    const url = req.url;
    console.log(
      `
      Hoy ${new Date()}
      Se ha recibido una consulta (POST) en la ruta ${url}
      se a creado el registro del usuario:`,
      parametros
    );
  
    next();
  };

module.exports = { reporteLogin, reporteUsuarioCreado}

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


  const reporteProductoAgregado = (req, res, next) =>{
    const parametros = req.body.nombre;
    const url = req.url;
    console.log(
      `Hoy ${new Date()}
       Se ha recibido una consulta (POST) en la ruta ${url} 
       se a agregado el producto:`, parametros 
    )
    next();
  }

  const reporteProductoEliminado = (req, res, next) =>{
    const parametros = req.params.id;
    const url = req.url;
    console.log(
      `Hoy ${new Date()}
      Se ha recibido una consulta (DELETE) en la ruta ${url}
      Se ha eliminado el producto con la ID`, parametros
      )
      next();
  }

module.exports = { 
  reporteLogin, 
  reporteUsuarioCreado,
  reporteProductoAgregado,
  reporteProductoEliminado}

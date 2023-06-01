import '../styles/SingUpForm.css'

function SingUp() {
  return (
    <div className="SinghUp-form">
      <h1> ¿Nuevo Acá? </h1>
      <p>
        {" "}
        <b>Regístrate </b>  y accede a nuestra tienda.
      </p>
      <form action="">
        <label htmlFor="nombre">Tu nombre </label>
        <input name="nombre" placeholder="nombre" type="text" />

        <label htmlFor="apellido">Tu apellido </label>
        <input name="apellido" placeholder="apellido" type="text" />

        <label htmlFor="correo">Correo Electronico</label>
        <input name="correo" placeholder="Correo" type="email" />

        <label htmlFor="password">Crea una contraseña</label>
        <input name="password" placeholder="contraseña" type="password" />
      </form>
    </div>
  );
}

export default SingUp;
import React from 'react'
import '../styles/Login.css'

function Login() {
  return (
    <div className='login'>
        <div className='form'>
        <h1>Login</h1>
        <form method='POST'>
            <label htmlFor="correo">ingrese correo</label>
            <input name="correo" placeholder='Email...' type="email"/>

            <label htmlFor="password">ingrese su contraseña</label>
            <input name="password" placeholder='contraseña' type="password"/>

            <button>Entrar</button>
        </form>
        </div>
    </div>
  )
}

export default Login

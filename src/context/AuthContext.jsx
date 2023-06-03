
import { createContext, useState } from "react";

export const AuthContex = createContext(null)


export const AuthContextProvider = ({children}) => {

    const [usuario, setUsuario] = useState({})

    const [user, setUser] = useState({});


    /*const logIn = async (userEmail, userPassword) => {

      const users = await getUsersData()
      console.log("JSON users registrados: ")
      console.log(users)
      const userDB = users.find(
          (item) => item.email === userEmail && item.password === userPassword
      );
      if (userDB) {
          console.log("usuario encontrado: ");
          console.log(userDB);
          setUser(userDB);
      } else {
          setUser(null)
          // throw new Error("User not found") //generar error en consola si el usuario no se encuentra.
          console.log("usuario no encontrado -----");
      }
      return userDB; //devuelve el usuario encontrado (se llama en AppLogIn)
    }*/


  const data={
    usuario,
    setUsuario,
    user,
    setUser
}


  return (
    <div>
      <AuthContex.Provider value={data}>
        {children}
      </AuthContex.Provider>
    </div>
  )
}

export default AuthContextProvider


import { createContext, useState } from "react";

export const AuthContex = createContext(null)


export const AuthContextProvider = ({children}) => {

    const [usuario, setUsuario] = useState(false)

    const [user, setUser] = useState({});


  const values={
    usuario,
    setUsuario,
    user,
    setUser
}


  return (
    <div>
      <AuthContex.Provider value={values}>
        {children}
      </AuthContex.Provider>
    </div>
  )
}

export default AuthContextProvider

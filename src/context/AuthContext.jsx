
import { createContext, useState } from "react";

export const AuthContex = createContext(null)


export const AuthContextProvider = ({children}) => {

    const [usuario, setUsuario] = useState({})

    const [user, setUser] = useState({});


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


import { createContext, useState } from "react";

export const AuthContex = createContext(null)


export const AuthContextProvider = ({children}) => {

    const [usuario, setUsuario] = useState({})

  const data={
    usuario,
    setUsuario
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

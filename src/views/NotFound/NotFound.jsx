import { Navigate } from "react-router-dom"
import ("../NotFound/NotFound.css")

const NotFound = () => {
  return (
    <div className="notfound-container">
        <h1>404 PAGE NOT FOUND</h1>
        <p>Ooops! estás intentando acceder a un páguina que no existe, por favor dirígete a home.</p>
        
        
    </div>
  )
}
export default NotFound
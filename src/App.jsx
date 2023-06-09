import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {ShopContextProvider} from "./context/ShopContext"
import {AuthContextProvider} from "./context/AuthContext"
import {Private} from "../src/helpers/Private"

import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Shop from "./views/Shop";
import Cart from "./views/Cart";
import Us from "./views/Us";
import Login from "./views/Login";
import Dashboard from "./views/dashboard";
import SingUp from "./views/SingUp";
import DesProduct from "./views/DesProduct";
import PersonalProducts from "./views/PersonalProducts"



function App() {

  return (
    <div className="App">

        <BrowserRouter>
        <AuthContextProvider>
          <Navbar />
          <ShopContextProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/descripcion" element={ <DesProduct/>} />
            <Route path="/nosotros" element={<Us />} />
            <Route path="/carrito" element={<Cart />} />
            <Route path="/registro" element={<SingUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/perfil" element={<Private><Dashboard /></Private>}></Route>
            <Route path="/misproductos" element={<Private><PersonalProducts /></Private>}></Route>
            <Route path="*" element={<h1>Pagina no encontrada</h1>}/>
          </Routes>
          </ShopContextProvider>
          </AuthContextProvider>
        </BrowserRouter>
    </div>
  );
}

export default App;

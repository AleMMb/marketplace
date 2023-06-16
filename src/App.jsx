import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {ShopContextProvider} from "./context/ShopContext"
import {AuthContextProvider} from "./context/AuthContext"
import {Private} from "../src/helpers/Private"

import Navbar from "./components/Navbar/Navbar";
import Home from "./views/Home/Home";
import Shop from "./views/Shop/Shop";
import Cart from "./views/Cart/Cart";
import Us from "./views/Us/Us";
import Login from "./views/Login/Login";
import Dashboard from "./views/dashboard/Dashboard";
import SingUp from "./views/SingUp/SingUp";
import DesProduct from "./views/DesProduct/DesProduct";
import PersonalProducts from "./views/PersonalProducts/PersonalProducts";
import AddProduct from "./views/AddProduct/AddProduct"
import NotFound from "./views/NotFound/NotFound";
import EditForm from "./components/EditForm/EditForm";



function App() {

  return (
    <div className="App">

        <BrowserRouter>
        <AuthContextProvider>
          <Navbar />
          <ShopContextProvider>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/shop" element={<Shop />} />
            <Route path="/descripcion/:id" element={ <DesProduct/>} />
            <Route path="/nosotros" element={<Us />} />
            <Route path="/carrito" element={<Cart />} />
            <Route path="/registro" element={<SingUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/nuevoproducto" element={<Private> <AddProduct/> </Private>} />
            <Route path="/perfil" element={<Private><Dashboard /></Private>}></Route>
            <Route path="/misproductos" element={<Private><PersonalProducts /></Private>}></Route>
            <Route path="/editar/:id" element={<Private><EditForm /></Private>}></Route>
            <Route path="*" element={<NotFound/>}/>
          </Routes>
          </ShopContextProvider>
          </AuthContextProvider>
        </BrowserRouter>
    </div>
  );
}

export default App;

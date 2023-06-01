import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ShopContextProvider } from "./context/shopContext";

import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Shop from "./views/Shop";
import Cart from "./views/cart";
import Us from "./views/Us";
import Login from "./views/Login";
import Dashboard from "./views/dashboard";
import SingUp from "./views/SingUp";



function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/nosotros" element={<Us />} />
            <Route path="/carrito" element={<Cart />} />
            <Route path="/registro" element={<SingUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="*" element={<h1>Pagina no encontrada</h1>}/>
          </Routes>
        </BrowserRouter>
      </ShopContextProvider>
    </div>
  );
}

export default App;
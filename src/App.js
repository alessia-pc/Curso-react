import "./App.css";
/* import { useState } from "react"; */
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Inicio from "./components/Inicio/Inicio";
import Cart from "./components/Cart/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contacto from "./components/Contacto/Contacto";
import { useState, createContext } from "react";
import { CartContextProvider } from "./context/CartContext";
import { NotificacionProvider } from "./notificacion/Notificacion";


export const Context = createContext();

const App = () => {
  const [cart, setCart] = useState([]);
  console.log(cart);

  return (
    <div className="App">
      <NotificacionProvider>
        <CartContextProvider>
          <BrowserRouter>
            <NavBar />
            <Routes>
              <Route path="/" element={<Inicio />} />
              <Route path="/inicio" element={<Inicio />} />
              <Route path="/productos" element={<ItemListContainer />} />
              <Route
                path="/productos/:categoriaId"
                element={<ItemListContainer />}
              />
              <Route
                path="/detalle/:productId"
                element={<ItemDetailContainer />}
              />
              <Route path="/contacto" element={<Contacto />}></Route>

              <Route
                path="*"
                element={<h1 className="error-404">NOT FOUND 404</h1>}
              />
              <Route path="/carrito" element={<Cart />} />
            </Routes>
          </BrowserRouter>
        </CartContextProvider>
      </NotificacionProvider>
    </div>
  );
};

export default App;

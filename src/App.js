import "./App.css";
/* import { useState } from "react"; */
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Inicio from "./components/Inicio/Inicio";
import Cart from "./components/Cart/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contacto from "./components/Contacto/Contacto";
import { CartContextProvider } from "./context/CartContext";
import { NotificacionProvider } from "./notificacion/Notificacion";
import Formulario from "./components/Formulario/Formulario";

const App = () => {

  return (
    <div className="App">
      <NotificacionProvider>
        <CartContextProvider>
          <BrowserRouter>
            <NavBar />
            <Routes>
              <Route
                path="*"
                element={<h1 className="error-404">NOT FOUND 404</h1>}
              />
              <Route path="/sonorous" element={<Inicio />} />
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

              <Route path="/carrito" element={<Cart />} />
              <Route path="/formulario" element={<Formulario />}></Route>
            </Routes>
          </BrowserRouter>
        </CartContextProvider>
      </NotificacionProvider>
    </div>
  );
};

export default App;
